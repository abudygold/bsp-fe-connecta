import { email, FieldTree, PathKind, required, SchemaPathTree } from '@angular/forms/signals';
import { FormlyField, FormlyFormConfig } from '@devkitify/angular-ui-kit';

export interface IForgotForm {
	email: string;
}

export const FORMLY_FORGOT_FORM = (
	formData: FieldTree<IForgotForm, string | number>,
): FormlyFormConfig => ({
	formClass: 'tw:grid tw:gap-4',
	fields: [
		{
			key: 'email',
			type: 'textbox',
			control: formData.email,
			config: { label: 'E-Mail', required: true, textboxType: 'email' },
		},
	] as FormlyField[],
});

export const FORGOT_DEFAULT_STATE: IForgotForm = {
	email: '',
};

export const FORGOT_SCHEMA_FORM = (schemaPath: SchemaPathTree<IForgotForm, PathKind.Root>) => {
	required(schemaPath.email, { message: 'Email is required' });
	email(schemaPath.email, { message: 'Enter a valid email address' });
};
