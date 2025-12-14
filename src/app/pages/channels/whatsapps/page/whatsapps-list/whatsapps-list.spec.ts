import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappsList } from './whatsapps-list';

describe('WhatsappsList', () => {
  let component: WhatsappsList;
  let fixture: ComponentFixture<WhatsappsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
