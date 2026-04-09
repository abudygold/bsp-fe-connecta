import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelAccountList } from './channel-account-list';

describe('ChannelAccountList', () => {
	let component: ChannelAccountList;
	let fixture: ComponentFixture<ChannelAccountList>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ChannelAccountList],
		}).compileComponents();

		fixture = TestBed.createComponent(ChannelAccountList);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
