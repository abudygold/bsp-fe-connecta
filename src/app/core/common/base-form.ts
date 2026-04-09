import { HttpParams } from '@angular/common/http';
import { inject, signal, WritableSignal } from '@angular/core';
import {
	FieldTree,
	form,
	FormOptions,
	PathKind,
	SchemaOrSchemaFn,
	submit,
} from '@angular/forms/signals';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFormConfig } from '@devkitify/angular-ui-kit';
import { IHttpResponse } from '../../shared/interface/base';
import { API } from '../services';
import { BaseAlert, DEFAULT_MESSAGE_CREATE, DEFAULT_MESSAGE_UPDATE } from './base-sweetalert';

export class BaseForm<FormModel> {
	api = inject(API);
	router = inject(Router);
	activatedRoute = inject(ActivatedRoute);

	formModel!: WritableSignal<FormModel>;
	formData!: FieldTree<FormModel, string | number>;

	id = signal<any>(null);
	isPageLoaded = signal<boolean>(false);

	constructor(
		formModel: FormModel | null,
		formData: FormOptions<FormModel> | SchemaOrSchemaFn<FormModel, PathKind.Root>,
	) {
		this.formModel = signal<FormModel>(formModel || {} as FormModel);
		this.formData = form(this.formModel, formData);

		this.id.set(this.activatedRoute.snapshot.paramMap.get('id') || null);
	}

	changeFormData(
		formData: FormOptions<FormModel> | SchemaOrSchemaFn<FormModel, PathKind.Root>,
	): void {
		this.formData = form(this.formModel, formData);
	}

	getDetailService(
		URL: string,
		EDIT_STATE: any,
		callbackFn?: (res: IHttpResponse) => void,
	): void {
		this.api.get<IHttpResponse>(`${URL}/${this.id()}`).subscribe({
			next: (res) => {
				this.formModel.update((form) => ({
					...form,
					...EDIT_STATE(res?.data),
				}));

				if (callbackFn) callbackFn(res);
			},
		});
	}

	getAsyncOptions(
		URL: string,
		formConfig: WritableSignal<FormlyFormConfig>,
		fieldKey: string,
	): void {
		this.api
			.get<IHttpResponse>(URL, {
				pageNo: 1,
				itemPerPage: 200,
			})
			.subscribe({
				next: (response: IHttpResponse) => {
					formConfig.update((form) => ({
						...form,
						fields: form.fields.map((field) => {
							if (field.key === fieldKey) {
								return {
									...field,
									config: {
										...field.config,
										options: {
											...field.config.options,
											data: response.data?.list || [],
										},
									},
								};
							}
							return field;
						}),
					}));
				},
			});
	}

	sendToApi(
		URL: string,
		bodyReq: any = null,
		params?: object,
		callbackFn?: (res: IHttpResponse) => void,
		errorFn?: VoidFunction,
	): void {
		submit(this.formData, async () =>
			this.#onSubmitService(URL, bodyReq, params, callbackFn, errorFn),
		);

		if (errorFn && this.formData().errorSummary()) errorFn();
	}

	#onSubmitService(
		URL: string,
		bodyReq: any = null,
		params?: any,
		callbackFn?: (res: IHttpResponse) => void,
		errorFn?: VoidFunction,
	): void {
		const URI = `${URL}${this.id() ? `/${this.id()}` : ''}${
			params
				? `?${new HttpParams({
						fromObject: params,
					})}`
				: ''
		}`;

		this.api.post<IHttpResponse>(URI, bodyReq).subscribe({
			next: (res) => {
				BaseAlert(
					'Success!',
					res?.msg || (this.id() ? DEFAULT_MESSAGE_CREATE : DEFAULT_MESSAGE_UPDATE),
					'success',
				);

				if (callbackFn) callbackFn(res);
			},
			error: (err) => {
				if (errorFn) errorFn();
			},
		});
	}
}
