import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsList } from './sms-list';

describe('SmsList', () => {
  let component: SmsList;
  let fixture: ComponentFixture<SmsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
