import { PathKind, required, SchemaPathTree } from '@angular/forms/signals';

export interface ICampaignForm {
	name: string;
	from: string;
	channel: string;
	targetType: 'file' | 'group';
	payload: {
		msgType: 'text' | 'template';
		text: string;
	};
	fileId: string;
	groupId: string;
}

export const CAMPAIGN_DEFAULT_STATE: ICampaignForm = {
	name: '',
	from: '',
	channel: 'WAU',
	targetType: 'file',
	payload: {
		msgType: 'text',
		text: '',
	},
	fileId: '',
	groupId: '',
};

export const CAMPAIGN_SCHEMA_FORM = (schemaPath: SchemaPathTree<ICampaignForm, PathKind.Root>) => {
	required(schemaPath.name, { message: 'Campaign Name is required' });
	required(schemaPath.from, { message: 'Account No is required' });
	required(schemaPath.channel, { message: 'Channel is required' });
	required(schemaPath.payload.msgType, { message: 'Message Type is required' });
	required(schemaPath.payload.text, { message: 'Message Body is required' });
	/* validate(schemaPath.payload.text, ({ value }) => {
		if (!value()) return { kind: 'required', message: 'Message Body is required' };

		return null;
	}); */
};
