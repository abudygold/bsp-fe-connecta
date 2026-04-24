import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelTemplateForm } from './channel-template-form';

describe('ChannelTemplateForm', () => {
	let component: ChannelTemplateForm;
	let fixture: ComponentFixture<ChannelTemplateForm>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ChannelTemplateForm],
		}).compileComponents();

		fixture = TestBed.createComponent(ChannelTemplateForm);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
