import { FieldTree, PathKind, required, SchemaPathTree } from '@angular/forms/signals';
import { FormlyField, FormlyFormConfig } from '@devkitify/angular-ui-kit';

export interface IAPIKeyForm {
	name: string;
}

export const API_KEY_EDIT_STATE = (data: any) => ({
	name: data?.name || '',
});

export const API_KEY_SCHEMA_FORM = (schemaPath: SchemaPathTree<IAPIKeyForm, PathKind.Root>) => {
	required(schemaPath.name, { message: 'Name is required' });
};

export const API_KEY_INIT_FORM = (
	formData: FieldTree<IAPIKeyForm, string | number>,
): FormlyFormConfig => ({
	formClass: 'tw:grid tw:gap-4',
	fields: [
		{
			key: 'name',
			type: 'textbox',
			control: formData.name,
			config: { label: 'Name' },
		},
	] as FormlyField[],
});
