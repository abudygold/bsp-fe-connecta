import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelWaList } from './channel-wa-list';

describe('ChannelWaList', () => {
	let component: ChannelWaList;
	let fixture: ComponentFixture<ChannelWaList>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ChannelWaList],
		}).compileComponents();

		fixture = TestBed.createComponent(ChannelWaList);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
