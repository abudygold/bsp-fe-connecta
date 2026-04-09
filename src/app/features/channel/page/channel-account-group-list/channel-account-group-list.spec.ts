import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelAccountGroupList } from './channel-account-group-list';

describe('ChannelAccountGroupList', () => {
	let component: ChannelAccountGroupList;
	let fixture: ComponentFixture<ChannelAccountGroupList>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ChannelAccountGroupList],
		}).compileComponents();

		fixture = TestBed.createComponent(ChannelAccountGroupList);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
