import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastList } from './broadcast-list';

describe('BroadcastList', () => {
  let component: BroadcastList;
  let fixture: ComponentFixture<BroadcastList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BroadcastList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadcastList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
