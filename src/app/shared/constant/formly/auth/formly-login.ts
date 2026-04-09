import { email, FieldTree, PathKind, required, SchemaPathTree } from '@angular/forms/signals';
import { FormlyField, FormlyFormConfig } from '@devkitify/angular-ui-kit';

export interface ILoginForm {
	email: string;
	password: string;
}

export const FORMLY_LOGIN_FORM = (
	formData: FieldTree<ILoginForm, string | number>,
): FormlyFormConfig => ({
	formClass: 'tw:grid tw:gap-4',
	fields: [
		{
			key: 'email',
			type: 'textbox',
			control: formData.email,
			config: { label: 'E-Mail', required: true, textboxType: 'email' },
		},
		{
			key: 'password',
			type: 'textbox',
			control: formData.password,
			config: { label: 'Password', textboxType: 'password' },
		},
	] as FormlyField[],
});

export const LOGIN_DEFAULT_STATE: ILoginForm = {
	email: '',
	password: '',
};

export const LOGIN_SCHEMA_FORM = (schemaPath: SchemaPathTree<ILoginForm, PathKind.Root>) => {
	required(schemaPath.email, { message: 'Email is required' });
	email(schemaPath.email, { message: 'Enter a valid email address' });
	required(schemaPath.password, { message: 'Password is required' });
};
