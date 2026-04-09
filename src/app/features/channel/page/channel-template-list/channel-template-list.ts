import { Component, signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { StatusBadge } from '../../../../shared/components/status-badge';
import { FORM_SM_DIALOG_CONFIG, TEMPLATE_URL } from '../../../../shared/constant/global';
import {
	CHANNEL_TEMPLATE_CUSTOM_TYPE,
	CHANNEL_TEMPLATE_WA_TABLE,
	CHANNEL_TEMPLATE_WAU_TABLE,
} from '../../../../shared/constant/table/channel';
import { ChannelTemplatePreview } from '../../dialog/channel-template-preview';

@Component({
	selector: 'app-channel-template-list',
	imports: [
		Table,
		Search,
		Button,
		StatusBadge,
		MatIconModule,
		MatCheckboxModule,
		FontAwesomeModule,
	],
	templateUrl: './channel-template-list.html',
	styleUrl: './channel-template-list.css',
})
export class ChannelTemplateList extends BaseTable {
	channel = signal<string>('');

	constructor() {
		// Default WA Channel
		super(TEMPLATE_URL, CHANNEL_TEMPLATE_WA_TABLE, CHANNEL_TEMPLATE_CUSTOM_TYPE);
		this.#initChannel();
	}

	#initChannel(): void {
		const path = this.router.url.split('/');
		this.channel.set(path.at(-1)?.toUpperCase() || '');

		if (this.channel() === 'WAU') {
			this.tableModel = CHANNEL_TEMPLATE_WAU_TABLE;
		}

		this.initAddButton('Add New Template', () => this.navigateToPage(['./add']));
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
