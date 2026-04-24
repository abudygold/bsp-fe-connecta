import { PathKind, required, SchemaPathTree } from '@angular/forms/signals';

export interface ITemplateForm {
	category: string;
	lang: string;
	name: string;
	payload: {
		body: string;
		header: string;
		headerType: string;
	};
}

export const TEMPLATE_DEFAULT_STATE: ITemplateForm = {
	category: '',
	lang: '',
	name: '',
	payload: {
		body: '',
		header: '',
		headerType: '',
	},
};

export const TEMPLATE_EDIT_STATE = (data: any) => ({
	category: data?.category || '',
	lang: data?.lang || '',
	name: data?.name || '',
	payload: {
		body: data?.payload.body || '',
		header: data?.payload.header || '',
		headerType: data?.payload.headerType || '',
	},
});

export const TEMPLATE_SCHEMA_FORM = (
	schemaPath: SchemaPathTree<ITemplateForm, PathKind.Root>,
) => {
	required(schemaPath.category, { message: 'Category is required' });
	required(schemaPath.lang, { message: 'Language is required' });
	required(schemaPath.name, { message: 'Name is required' });
	required(schemaPath.payload.body, { message: 'Body is required' });
};
