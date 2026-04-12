import { applyEach, PathKind, required, SchemaPathTree, validate } from '@angular/forms/signals';

export interface ISendMessageForm {
	channel: string;
	from: string;
	to: string;
	msgType: string;
	text: string;
	template: {
		body: {
			parameters: {
				name: string;
			}[];
		};
		lang: string;
		name: string;
	};
}

export const SEND_MESSAGE_DEFAULT_STATE: ISendMessageForm = {
	channel: 'WAU',
	from: '',
	to: '',
	msgType: 'text',
	text: '',
	template: {
		body: {
			parameters: [],
		},
		lang: '',
		name: '',
	},
};

export const SEND_MESSAGE_EDIT_STATE = (data: any) => ({
	channel: data?.channel || 'WAU',
	from: data?.from || '',
	to: data?.to || '',
	msgType: data?.name || 'text',
	text: data?.text || '',
	template: data?.template
		? {
				...data?.template,
				body: {
					...data?.template?.body,
					parameters:
						data?.template?.body?.parameters.map((item: any) => ({ name: item })) || [],
				},
			}
		: SEND_MESSAGE_DEFAULT_STATE.template,
});

export const SEND_MESSAGE_SCHEMA_FORM = (
	schemaPath: SchemaPathTree<ISendMessageForm, PathKind.Root>,
) => {
	required(schemaPath.channel, { message: 'Channel is required' });
	required(schemaPath.from, { message: 'From is required' });
	required(schemaPath.to, { message: 'To is required' });
	required(schemaPath.msgType, { message: 'Message Type is required' });
	validate(schemaPath.text, ({ value, valueOf }) => {
		const msgType = valueOf(schemaPath.msgType);

		if (msgType === 'text' && !value())
			return { kind: 'required', message: 'Message Body is required' };

		return null;
	});
	validate(schemaPath.template.lang, ({ value, valueOf }) => {
		const msgType = valueOf(schemaPath.msgType);

		if (msgType === 'template' && !value())
			return { kind: 'required', message: 'Language is required' };

		return null;
	});
	validate(schemaPath.template.name, ({ value, valueOf }) => {
		const msgType = valueOf(schemaPath.msgType);

		if (msgType === 'template' && !value())
			return { kind: 'required', message: 'Template is required' };

		return null;
	});
	applyEach(schemaPath.template.body.parameters, (itemPath) =>
		validate(itemPath.name, ({ value, valueOf }) => {
			const msgType = valueOf(schemaPath.msgType);

			if (msgType === 'template' && !value())
				return { kind: 'required', message: 'Parameter is required' };

			return null;
		}),
	);
};
