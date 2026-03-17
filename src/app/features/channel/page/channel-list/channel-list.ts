import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { FORM_SM_DIALOG_CONFIG } from '../../../../shared/constant';
import { CHANNELS_URL } from '../../../../shared/constant/global';
import { CHANNEL_TABLE, CUSTOM_TYPE_CHANNEL } from '../../../../shared/constant/table';
import { ChannelForm } from '../../dialog/channel-form';

@Component({
	selector: 'app-channel-list',
	imports: [
		RouterLink,
		MatCheckboxModule,
		Table,
		Search,
		Button,
		MatIconModule,
		MatTooltipModule,
		FontAwesomeModule,
	],
	templateUrl: './channel-list.html',
	styleUrl: './channel-list.css',
})
export class ChannelList extends BaseTable {
	constructor() {
		super(CHANNELS_URL, CHANNEL_TABLE, CUSTOM_TYPE_CHANNEL);
		this.initAddButton('Add Channel', () => this.openDialog());
	}

	openDialog(data?: any): void {
		const dialogRef = this.dialog.open(ChannelForm, {
			...FORM_SM_DIALOG_CONFIG,
			data,
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (!result) return;

			this.fetchData();
		});
	}
}
