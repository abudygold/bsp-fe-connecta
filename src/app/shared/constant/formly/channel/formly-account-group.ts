import { PathKind, required, SchemaPathTree } from '@angular/forms/signals';

export interface IAccountGroupForm {
	name: string;
	accounts: string[];
}

export const ACCOUNT_GROUP_DEFAULT_STATE = {
	name: '',
	accounts: [],
};

export const ACCOUNT_GROUP_EDIT_STATE = (data: any) => ({
	name: data?.name || '',
	accounts: data?.accounts?.map((item: any) => item.id) || [],
});

export const ACCOUNT_GROUP_SCHEMA_FORM = (
	schemaPath: SchemaPathTree<IAccountGroupForm, PathKind.Root>,
) => {
	required(schemaPath.name, { message: 'Group Name is required' });
	required(schemaPath.accounts, { message: 'Accounts is required' });
};
