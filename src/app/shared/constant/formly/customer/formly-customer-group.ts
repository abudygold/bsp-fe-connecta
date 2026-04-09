import { PathKind, required, SchemaPathTree } from '@angular/forms/signals';

export interface ICustomerGroupForm {
	name: string;
}

export const CUSTOMER_GROUP_DEFAULT_STATE: ICustomerGroupForm = {
	name: '',
};

export const CUSTOMER_GROUP_EDIT_STATE = (data: any) => ({
	name: data?.name || '',
});

export const CUSTOMER_GROUP_SCHEMA_FORM = (
	schemaPath: SchemaPathTree<ICustomerGroupForm, PathKind.Root>,
) => {
	required(schemaPath.name, { message: 'Name is required' });
};
