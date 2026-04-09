import { applyEach, PathKind, required, SchemaPathTree } from '@angular/forms/signals';

export interface ICustomerForm {
	name: string;
	contacts: {
		channel: string;
		contactNo: string;
		displayName: string;
		isPrimary: number;
	}[];
}

export const CUSTOMER_DEFAULT_STATE: ICustomerForm = {
	name: '',
	contacts: [],
};

export const CUSTOMER_EDIT_STATE = (data: any) => ({
	name: data?.name || '',
	contacts: data?.contacts || [],
});

export const CUSTOMER_SCHEMA_FORM = (schemaPath: SchemaPathTree<ICustomerForm, PathKind.Root>) => {
	required(schemaPath.name, { message: 'Name is required' });
	applyEach(schemaPath.contacts, (itemPath) => {
		required(itemPath.channel, { message: 'Jenis Penerbangan is required' });
		required(itemPath.contactNo, { message: 'Tanggal Penerbangan is required' });
	});
};
