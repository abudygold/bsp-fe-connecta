import { FieldTree, PathKind, required, SchemaPathTree } from '@angular/forms/signals';
import { FormlyField, FormlyFormConfig } from '@devkitify/angular-ui-kit';

export interface IMenuReq {
	title: string;
	parentId: string;
	icon: string;
	target: string;
	orderNo: number;
	isPrivate: boolean;
}

export const MENU_EDIT_STATE = (data: any) => ({
	title: data?.title || '',
	parentId: data?.parentId || '',
	icon: data?.icon || '',
	target: data?.target || '',
	orderNo: data?.orderNo || 0,
	isPrivate: data?.isPrivate || false,
});

export const MENU_SCHEMA_FORM = (schemaPath: SchemaPathTree<IMenuReq, PathKind.Root>) => {
	required(schemaPath.title, { message: 'Title is required' });
};

export const MENU_INIT_FORM = (
	formData: FieldTree<IMenuReq, string | number>,
): FormlyFormConfig => ({
	formClass: 'tw:grid tw:gap-4',
	fields: [
		{
			key: 'title',
			type: 'textbox',
			control: formData.title,
			config: { label: 'Title', required: true },
		},
		{
			key: 'parentId',
			type: 'dropdown',
			control: formData.parentId,
			config: {
				label: 'Parent Menu',
				options: {
					data: [],
					labelKey: 'title',
					valueKey: 'id',
				},
			},
		},
		{
			key: 'icon',
			type: 'textbox',
			control: formData.icon,
			config: { label: 'Icon' },
		},
		{
			key: 'target',
			type: 'textbox',
			control: formData.target,
			config: { label: 'Target' },
		},
		{
			key: 'orderNo',
			type: 'textbox',
			control: formData.orderNo,
			config: { label: 'Order', textboxType: 'number' },
		},
		{
			key: 'isPrivate',
			type: 'slide-toggle',
			control: formData.isPrivate,
			config: { label: 'Is Private' },
		},
	] as FormlyField[],
});
