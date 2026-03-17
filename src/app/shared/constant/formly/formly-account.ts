import { FieldTree, PathKind, required, SchemaPathTree } from '@angular/forms/signals';
import { FormlyField, FormlyFormConfig } from '@devkitify/angular-ui-kit';

export interface IAccountReq {
	orgId: string;
	channel: string;
	accountNo: string;
	accountName: string;
	nativeId: string;
}

export const ACCOUNT_EDIT_STATE = (data: any) => ({
	orgId: data?.orgId || '',
	channel: data?.orgId || '',
	accountNo: data?.orgId || '',
	accountName: data?.orgId || '',
	nativeId: data?.orgId || '',
});

export const ACCOUNT_SCHEMA_FORM = (schemaPath: SchemaPathTree<IAccountReq, PathKind.Root>) => {
	required(schemaPath.orgId, { message: 'Organization is required' });
	required(schemaPath.channel, { message: 'Channel is required' });
	required(schemaPath.accountNo, { message: 'Account Number is required' });
	required(schemaPath.accountName, { message: 'Account Name is required' });
	required(schemaPath.nativeId, { message: 'Native ID is required' });
};

export const ACCOUNT_INIT_FORM = (
	formData: FieldTree<IAccountReq, string | number>,
): FormlyFormConfig => ({
	formClass: 'tw:grid tw:gap-4',
	fields: [
		{
			key: 'orgId',
			type: 'dropdown',
			control: formData.orgId,
			config: {
				label: 'Organization',
				required: true,
				options: {
					data: [],
					labelKey: 'name',
					valueKey: 'id',
				},
			},
		},
		{
			key: 'channel',
			type: 'dropdown',
			control: formData.channel,
			config: {
				label: 'Channel',
				required: true,
				options: {
					data: [],
					labelKey: 'name',
					valueKey: 'id',
				},
			},
		},
		{
			key: 'accountNo',
			type: 'textbox',
			control: formData.accountNo,
			config: { label: 'Account Number', required: true },
		},
		{
			key: 'accountName',
			type: 'textbox',
			control: formData.accountName,
			config: { label: 'Account Name', required: true },
		},
		{
			key: 'nativeId',
			type: 'textbox',
			control: formData.nativeId,
			config: { label: 'Native ID', required: true },
		},
	] as FormlyField[],
});
