import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { StatusBadge } from '../../../../shared/components/status-badge';
import { CAMPAIGN_URL } from '../../../../shared/constant/global';
import { CAMPAIGN_CUSTOM_TYPE, CAMPAIGN_TABLE } from '../../../../shared/constant/table/campaign';

@Component({
	selector: 'app-campaign-list',
	imports: [Table, Search, Button, StatusBadge, MatIconModule, FontAwesomeModule],
	templateUrl: './campaign-list.html',
	styleUrl: './campaign-list.css',
})
export class CampaignList extends BaseTable {
	constructor() {
		super(CAMPAIGN_URL, CAMPAIGN_TABLE, CAMPAIGN_CUSTOM_TYPE);
		this.initAddButton('New Campaign', () => this.navigateToPage(['./add']));
	}
}
