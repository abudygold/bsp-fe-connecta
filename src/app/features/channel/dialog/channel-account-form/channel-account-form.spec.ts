import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelAccountForm } from './channel-account-form';

describe('ChannelAccountForm', () => {
	let component: ChannelAccountForm;
	let fixture: ComponentFixture<ChannelAccountForm>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ChannelAccountForm],
		}).compileComponents();

		fixture = TestBed.createComponent(ChannelAccountForm);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
