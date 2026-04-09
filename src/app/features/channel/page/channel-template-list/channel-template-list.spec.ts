import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelTemplateList } from './channel-template-list';

describe('ChannelTemplateList', () => {
	let component: ChannelTemplateList;
	let fixture: ComponentFixture<ChannelTemplateList>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ChannelTemplateList],
		}).compileComponents();

		fixture = TestBed.createComponent(ChannelTemplateList);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
