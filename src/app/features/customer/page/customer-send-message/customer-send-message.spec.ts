import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSendMessage } from './customer-send-message';

describe('CustomerSendMessage', () => {
	let component: CustomerSendMessage;
	let fixture: ComponentFixture<CustomerSendMessage>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [CustomerSendMessage],
		}).compileComponents();

		fixture = TestBed.createComponent(CustomerSendMessage);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
