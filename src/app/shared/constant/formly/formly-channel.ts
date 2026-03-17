import { FieldTree, PathKind, required, SchemaPathTree } from '@angular/forms/signals';
import { FormlyField, FormlyFormConfig } from '@devkitify/angular-ui-kit';

export interface IChannelReq {
	id: string;
	name: string;
}

export const CHANNEL_EDIT_STATE = (data: any) => ({
	id: data?.id || '',
	name: data?.name || '',
});

export const CHANNEL_SCHEMA_FORM = (schemaPath: SchemaPathTree<IChannelReq, PathKind.Root>) => {
	required(schemaPath.id, { message: 'ID is required' });
	required(schemaPath.name, { message: 'Name is required' });
};

export const CHANNEL_INIT_FORM = (
	formData: FieldTree<IChannelReq, string | number>,
): FormlyFormConfig => ({
	formClass: 'tw:grid tw:gap-4',
	fields: [
		{
			key: 'id',
			type: 'textbox',
			control: formData.id,
			config: { label: 'ID', required: true },
		},
		{
			key: 'name',
			type: 'textbox',
			control: formData.name,
			config: { label: 'Name', required: true },
		},
	] as FormlyField[],
});
