import { disabled, FieldTree, PathKind, required, SchemaPathTree } from '@angular/forms/signals';
import { FormlyField, FormlyFormConfig } from '@devkitify/angular-ui-kit';

export interface IAccountWAUForm {
	channel: string;
	accountNo: string;
	accountName: string;
}

export const ACCOUNT_WAU_EDIT_STATE = (data: any) => ({
	channel: data?.channel || '',
	accountNo: data?.accountNo || '',
	accountName: data?.accountName || '',
});

export const ACCOUNT_WAU_CREATE_SCHEMA_FORM = (
	schemaPath: SchemaPathTree<IAccountWAUForm, PathKind.Root>,
) => {
	required(schemaPath.accountName, { message: 'Account Name is required' });
};

export const ACCOUNT_WAU_EDIT_SCHEMA_FORM = (
	schemaPath: SchemaPathTree<IAccountWAUForm, PathKind.Root>,
) => {
	disabled(schemaPath.accountNo);
	required(schemaPath.accountName, { message: 'Account Name is required' });
};

export const ACCOUNT_WAU_INIT_FORM = (
	formData: FieldTree<IAccountWAUForm, string | number>,
): FormlyFormConfig => ({
	formClass: 'tw:grid tw:gap-4',
	fields: [
		{
			key: 'accountNo',
			type: 'textbox',
			control: formData.accountNo,
			config: { label: 'Account No' },
		},
		{
			key: 'accountName',
			type: 'textbox',
			control: formData.accountName,
			config: { label: 'Account Name', required: true },
		},
	] as FormlyField[],
});
