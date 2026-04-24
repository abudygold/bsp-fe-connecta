import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelAccountGroupForm } from './channel-account-group-form';

describe('ChannelAccountGroupForm', () => {
	let component: ChannelAccountGroupForm;
	let fixture: ComponentFixture<ChannelAccountGroupForm>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ChannelAccountGroupForm],
		}).compileComponents();

		fixture = TestBed.createComponent(ChannelAccountGroupForm);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
