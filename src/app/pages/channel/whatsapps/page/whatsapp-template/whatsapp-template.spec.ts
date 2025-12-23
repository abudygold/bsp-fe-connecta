import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappTemplate } from './whatsapp-template';

describe('WhatsappTemplate', () => {
  let component: WhatsappTemplate;
  let fixture: ComponentFixture<WhatsappTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
