import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { StatusBadge } from '../../../../shared/components/status-badge';
import {
	FORM_SM_DIALOG_CONFIG,
	TEMPLATE_SMS_URL,
	TEMPLATE_WA_URL,
	TEMPLATE_WAU_URL,
} from '../../../../shared/constant/global';
import {
	CHANNEL_TEMPLATE_CUSTOM_TYPE,
	CHANNEL_TEMPLATE_WA_TABLE,
	CHANNEL_TEMPLATE_WAU_TABLE,
} from '../../../../shared/constant/table/channel';
import { ChannelTemplatePreview } from '../../dialog/channel-template-preview';

@Component({
	selector: 'app-channel-template-list',
	imports: [Table, Search, Button, StatusBadge, MatIconModule, FontAwesomeModule],
	templateUrl: './channel-template-list.html',
	styleUrl: './channel-template-list.css',
})
export class ChannelTemplateList extends BaseTable {
	channel = signal<string>('');

	constructor() {
		// Default WA Channel
		super(TEMPLATE_WA_URL, CHANNEL_TEMPLATE_WA_TABLE, CHANNEL_TEMPLATE_CUSTOM_TYPE, false);
		this.initAddButton('New Template', () => this.navigateToPage(['./add']));
		this.#initChannel();
	}

	#initChannel(): void {
		const path = this.router.url.split('/');
		this.channel.set(path.at(-2)?.toUpperCase() || '');

		switch (this.channel()) {
			case 'WAU':
				this.endpoint = TEMPLATE_WAU_URL;
				this.tableModel = CHANNEL_TEMPLATE_WAU_TABLE;
				break;
			case 'SMS':
				this.endpoint = TEMPLATE_SMS_URL;
				this.tableModel = CHANNEL_TEMPLATE_WAU_TABLE;
				break;
		}

		this.fetchData();
	}

	openPreviewTemplateDialog(data: any): void {
		this.dialog.open(ChannelTemplatePreview, {
			...FORM_SM_DIALOG_CONFIG,
			data: {
				row: data,
			},
		});
	}
}
