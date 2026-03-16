import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { CAMPAIGN_URL } from '../../../../shared/constant/global';
import { CAMPAIGN_TABLE, CUSTOM_TYPE_CAMPAIGN } from '../../../../shared/constant/table';

@Component({
	selector: 'app-campaign-list',
	imports: [MatCheckboxModule, Table, Search, Button, FontAwesomeModule],
	templateUrl: './campaign-list.html',
	styleUrl: './campaign-list.css',
})
export class CampaignList extends BaseTable {
	constructor() {
		super(CAMPAIGN_URL, CAMPAIGN_TABLE, CUSTOM_TYPE_CAMPAIGN);
		this.initAddButton('Add Campaign', () => this.navigateToPage(['./add']));
	}
}
