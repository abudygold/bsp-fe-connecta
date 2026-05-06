import {
	email,
	FieldTree,
	PathKind,
	required,
	SchemaPathTree,
	validate,
} from '@angular/forms/signals';
import { FormlyField, FormlyFormConfig } from '@devkitify/angular-ui-kit';
import { PASSWORD_VALIDATION } from '../../global';

export interface IOrganizationReq {
	name: string;
	owner: {
		name: string;
		email: string;
		pass: string;
	};
}

export const ORGANIZATION_EDIT_STATE = (data: any) => ({
	name: data?.name || '',
	owner: {
		name: data?.owner?.name || '',
		email: data?.owner?.email || '',
		pass: data?.owner?.pass || '',
	},
});

export const ORGANIZATION_SCHEMA_FORM = (
	schemaPath: SchemaPathTree<IOrganizationReq, PathKind.Root>,
) => {
	required(schemaPath.name, { message: 'Name is required' });
	required(schemaPath.owner.name, { message: 'Owner Name is required' });
	required(schemaPath.owner.email, { message: 'Owner Email is required' });
	email(schemaPath.owner.email, { message: 'Enter a valid email address' });
	validate(schemaPath.owner.pass, ({ value }) => PASSWORD_VALIDATION(value()));
};

export const ORGANIZATION_INIT_FORM = (
	formData: FieldTree<IOrganizationReq, string | number>,
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
			key: 'ownerName',
			type: 'textbox',
			control: formData.owner.name,
			config: { label: 'Owner Name', required: true },
		},
		{
			key: 'ownerEmail',
			type: 'textbox',
			control: formData.owner.email,
			config: { label: 'Owner Email', required: true, textboxType: 'email' },
		},
		{
			key: 'ownerPass',
			type: 'textbox',
			control: formData.owner.pass,
			config: { label: 'Password', required: true, textboxType: 'password' },
		},
	] as FormlyField[],
});
