import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelTemplateWAUForm } from './channel-template-wau-form';

describe('ChannelTemplateWAUForm', () => {
	let component: ChannelTemplateWAUForm;
	let fixture: ComponentFixture<ChannelTemplateWAUForm>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ChannelTemplateWAUForm],
		}).compileComponents();

		fixture = TestBed.createComponent(ChannelTemplateWAUForm);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
