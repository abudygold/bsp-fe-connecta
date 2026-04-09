import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGroupForm } from './customer-group-form';

describe('CustomerGroupForm', () => {
	let component: CustomerGroupForm;
	let fixture: ComponentFixture<CustomerGroupForm>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CustomerGroupForm],
		}).compileComponents();

		fixture = TestBed.createComponent(CustomerGroupForm);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
