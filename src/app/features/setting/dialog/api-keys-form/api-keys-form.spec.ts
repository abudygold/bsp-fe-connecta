import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiKeysForm } from './api-keys-form';

describe('ApiKeysForm', () => {
	let component: ApiKeysForm;
	let fixture: ComponentFixture<ApiKeysForm>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ApiKeysForm],
		}).compileComponents();

		fixture = TestBed.createComponent(ApiKeysForm);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
