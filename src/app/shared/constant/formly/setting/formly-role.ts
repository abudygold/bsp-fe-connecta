import { FieldTree, PathKind, required, SchemaPathTree } from '@angular/forms/signals';
import { FormlyField, FormlyFormConfig } from '@devkitify/angular-ui-kit';

export interface IRoleReq {
	name: string;
	orgId: string;
}

export const ROLE_EDIT_STATE = (data: any) => ({
	name: data?.name || '',
	orgId: data?.orgId || '',
});

export const ROLE_SCHEMA_FORM = (schemaPath: SchemaPathTree<IRoleReq, PathKind.Root>) => {
	required(schemaPath.name, { message: 'Name is required' });
	required(schemaPath.orgId, { message: 'Organization is required' });
};

export const ROLE_INIT_FORM = (
	formData: FieldTree<IRoleReq, string | number>,
): FormlyFormConfig => ({
	formClass: 'tw:grid tw:gap-4',
	fields: [
		{
			key: 'name',
			type: 'textbox',
			control: formData.name,
			config: { label: 'Name', required: true },
		},
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
	] as FormlyField[],
});
