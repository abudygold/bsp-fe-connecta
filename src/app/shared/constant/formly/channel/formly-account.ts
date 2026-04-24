import {
	disabled,
	FieldTree,
	PathKind,
	required,
	SchemaPathTree,
	validate,
} from '@angular/forms/signals';
import { FormlyField, FormlyFormConfig } from '@devkitify/angular-ui-kit';

export interface IAccountForm {
	channel: string;
	accountNo: string;
	accountName: string;
}

export const ACCOUNT_EDIT_STATE = (data: any) => ({
	channel: data?.channel || '',
	accountNo: data?.accountNo || '',
	accountName: data?.accountName || '',
});

export const ACCOUNT_SCHEMA_FORM = (
	schemaPath: SchemaPathTree<IAccountForm, PathKind.Root>,
	isEdit: boolean = false,
	channel: string = '',
) => {
	required(schemaPath.accountName, { message: 'Account Name is required' });
	disabled(schemaPath.accountNo, () => isEdit);
	validate(schemaPath.accountNo, ({ value }) => {
		console.log('Channel:', channel, 'Value:', value(), 'Is Edit:', isEdit);
		if (!isEdit && !value() && channel === 'SMS')
			return { kind: 'invalid', message: 'Phone No is required' };
		else if (!isEdit && !value()) return { kind: 'invalid', message: 'Account No is required' };

		return null;
	});
};

export const ACCOUNT_INIT_FORM = (
	formData: FieldTree<IAccountForm, string | number>,
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
