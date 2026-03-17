import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountWaForm } from './account-wa-form';

describe('AccountWaForm', () => {
	let component: AccountWaForm;
	let fixture: ComponentFixture<AccountWaForm>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AccountWaForm],
		}).compileComponents();

		fixture = TestBed.createComponent(AccountWaForm);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
