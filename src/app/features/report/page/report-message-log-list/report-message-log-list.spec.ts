import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMessageLogList } from './report-message-log-list';

describe('ReportMessageLogList', () => {
	let component: ReportMessageLogList;
	let fixture: ComponentFixture<ReportMessageLogList>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ReportMessageLogList],
		}).compileComponents();

		fixture = TestBed.createComponent(ReportMessageLogList);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
