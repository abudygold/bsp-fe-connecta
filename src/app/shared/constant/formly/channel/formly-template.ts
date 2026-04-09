import { PathKind, required, SchemaPathTree } from '@angular/forms/signals';

export interface ITemplateWAUForm {
	category: string;
	lang: string;
	name: string;
	payload: {
		body: string;
		header: string;
		headerType: string;
	};
}

export const TEMPLATE_WAU_DEFAULT_STATE: ITemplateWAUForm = {
	category: '',
	lang: '',
	name: '',
	payload: {
		body: '',
		header: '',
		headerType: '',
	},
};

export const TEMPLATE_WAU_EDIT_STATE = (data: any) => ({
	category: data?.category || '',
	lang: data?.lang || '',
	name: data?.name || '',
	payload: data?.payload || {
		body: '',
		header: '',
		headerType: '',
	},
});

export const TEMPLATE_WAU_SCHEMA_FORM = (
	schemaPath: SchemaPathTree<ITemplateWAUForm, PathKind.Root>,
) => {
	required(schemaPath.category, { message: 'Category is required' });
	required(schemaPath.lang, { message: 'Language is required' });
	required(schemaPath.name, { message: 'Name is required' });
	required(schemaPath.payload.body, { message: 'Body is required' });
};
