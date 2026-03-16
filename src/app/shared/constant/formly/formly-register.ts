import {
	email,
	FieldTree,
	PathKind,
	required,
	SchemaPathTree,
	validate,
} from '@angular/forms/signals';
import { FormlyField, FormlyFormConfig } from '@devkitify/angular-ui-kit';
import { PASSWORD_VALIDATION } from '../password-validation';

export interface IRegisterForm {
	clientName: string;
	ownerName: string;
	country: string;
	address: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export const FORMLY_REGISTER_FORM = (
	formData: FieldTree<IRegisterForm, string | number>,
): FormlyFormConfig => ({
	formClass: 'tw:grid tw:gap-4',
	fields: [
		{
			key: 'clientName',
			type: 'textbox',
			control: formData.clientName,
			config: { label: 'Client Name', required: true, textboxType: 'text' },
		},
		{
			key: 'ownerName',
			type: 'textbox',
			control: formData.ownerName,
			config: { label: 'Owner Name', required: true, textboxType: 'text' },
		},
		{
			key: 'country',
			type: 'dropdown',
			control: formData.country,
			config: {
				label: 'Country',
				required: true,
				options: {
					labelKey: 'name',
					valueKey: 'id',
					data: [
						{ id: 'satu_', name: 'satu' },
						{ id: 'dua_', name: 'dua' },
					],
				},
			},
		},
		{
			key: 'address',
			type: 'textarea',
			control: formData.address,
			config: { label: 'Address' },
		},
		{
			key: 'email',
			type: 'textbox',
			control: formData.email,
			config: { label: 'Email', required: true, textboxType: 'email' },
		},
		{
			key: 'password',
			type: 'textbox',
			control: formData.password,
			config: { label: 'Password', textboxType: 'password' },
		},
		{
			key: 'confirmPassword',
			type: 'textbox',
			control: formData.confirmPassword,
			config: { label: 'Confirm Password', textboxType: 'password' },
		},
	] as FormlyField[],
});

export const REGISTER_DEFAULT_STATE: IRegisterForm = {
	clientName: '',
	ownerName: '',
	country: '',
	address: '',
	email: '',
	password: '',
	confirmPassword: '',
};

export const REGISTER_SCHEMA_FORM = (schemaPath: SchemaPathTree<IRegisterForm, PathKind.Root>) => {
	required(schemaPath.clientName, { message: 'Client name is required' });
	required(schemaPath.ownerName, { message: 'Owner name is required' });
	required(schemaPath.country, { message: 'Country is required' });
	email(schemaPath.email, { message: 'Enter a valid email address' });
	validate(schemaPath.password, ({ value, valueOf }) => {
		const password = value();
		const confirmPassword = valueOf(schemaPath.confirmPassword);

		return PASSWORD_VALIDATION(password, confirmPassword);
	});
	validate(schemaPath.confirmPassword, ({ value, valueOf }) => {
		const confirmPassword = value();
		const password = valueOf(schemaPath.password);

		return PASSWORD_VALIDATION(confirmPassword, password);
	});
};
