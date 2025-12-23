import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsTemplate } from './sms-template';

describe('SmsTemplate', () => {
  let component: SmsTemplate;
  let fixture: ComponentFixture<SmsTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
