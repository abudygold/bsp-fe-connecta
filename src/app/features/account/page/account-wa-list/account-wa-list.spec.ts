import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountWaList } from './account-wa-list';

describe('AccountWaList', () => {
	let component: AccountWaList;
	let fixture: ComponentFixture<AccountWaList>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AccountWaList],
		}).compileComponents();

		fixture = TestBed.createComponent(AccountWaList);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
