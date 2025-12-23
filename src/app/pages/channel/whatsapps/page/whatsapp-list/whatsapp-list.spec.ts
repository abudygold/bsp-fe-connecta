import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappList } from './whatsapp-list';

describe('WhatsappList', () => {
  let component: WhatsappList;
  let fixture: ComponentFixture<WhatsappList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
