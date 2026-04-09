import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGroupMembers } from './customer-group-members';

describe('CustomerGroupMembers', () => {
	let component: CustomerGroupMembers;
	let fixture: ComponentFixture<CustomerGroupMembers>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CustomerGroupMembers],
		}).compileComponents();

		fixture = TestBed.createComponent(CustomerGroupMembers);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
