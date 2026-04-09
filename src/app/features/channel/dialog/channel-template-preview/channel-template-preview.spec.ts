import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelTemplatePreview } from './channel-template-preview';

describe('ChannelTemplatePreview', () => {
	let component: ChannelTemplatePreview;
	let fixture: ComponentFixture<ChannelTemplatePreview>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ChannelTemplatePreview],
		}).compileComponents();

		fixture = TestBed.createComponent(ChannelTemplatePreview);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
