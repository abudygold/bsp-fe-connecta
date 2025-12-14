import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGroupList } from './customer-group-list';

describe('CustomerGroupList', () => {
  let component: CustomerGroupList;
  let fixture: ComponentFixture<CustomerGroupList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerGroupList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerGroupList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
