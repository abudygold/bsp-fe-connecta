import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelAccountWAUForm } from './channel-account-wau-form';

describe('ChannelAccountWAUForm', () => {
	let component: ChannelAccountWAUForm;
	let fixture: ComponentFixture<ChannelAccountWAUForm>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ChannelAccountWAUForm],
		}).compileComponents();

		fixture = TestBed.createComponent(ChannelAccountWAUForm);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
