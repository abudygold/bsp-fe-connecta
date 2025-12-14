import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappsTemplate } from './whatsapps-template';

describe('WhatsappsTemplate', () => {
  let component: WhatsappsTemplate;
  let fixture: ComponentFixture<WhatsappsTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappsTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappsTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
