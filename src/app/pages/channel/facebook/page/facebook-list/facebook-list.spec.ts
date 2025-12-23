import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookList } from './facebook-list';

describe('FacebookList', () => {
  let component: FacebookList;
  let fixture: ComponentFixture<FacebookList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacebookList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
