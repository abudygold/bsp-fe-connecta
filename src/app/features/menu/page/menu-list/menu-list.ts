import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { Button, Table } from '@devkitify/angular-ui-kit';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseTable } from '../../../../core/common';
import { Search } from '../../../../shared/components/search';
import { MENUS_URL } from '../../../../shared/constant/global';
import { CUSTOM_TYPE_MENU, MENU_TABLE } from '../../../../shared/constant/table';

@Component({
	selector: 'app-menu-list',
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
	templateUrl: './menu-list.html',
	styleUrl: './menu-list.css',
})
export class MenuList extends BaseTable {
	constructor() {
		super(MENUS_URL, MENU_TABLE, CUSTOM_TYPE_MENU);
		this.initAddButton('Add Menu', () => this.navigateToPage(['./add']));
	}
}
