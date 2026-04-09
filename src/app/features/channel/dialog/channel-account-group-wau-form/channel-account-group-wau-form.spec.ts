import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelAccountGroupWAUForm } from './channel-account-group-wau-form';

describe('ChannelAccountGroupWAUForm', () => {
	let component: ChannelAccountGroupWAUForm;
	let fixture: ComponentFixture<ChannelAccountGroupWAUForm>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ChannelAccountGroupWAUForm],
		}).compileComponents();

		fixture = TestBed.createComponent(ChannelAccountGroupWAUForm);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
