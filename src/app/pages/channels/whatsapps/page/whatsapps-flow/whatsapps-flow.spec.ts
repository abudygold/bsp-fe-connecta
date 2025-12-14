import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappsFlow } from './whatsapps-flow';

describe('WhatsappsFlow', () => {
  let component: WhatsappsFlow;
  let fixture: ComponentFixture<WhatsappsFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappsFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappsFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
