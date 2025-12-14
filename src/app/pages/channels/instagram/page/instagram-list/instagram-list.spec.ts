import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramList } from './instagram-list';

describe('InstagramList', () => {
  let component: InstagramList;
  let fixture: ComponentFixture<InstagramList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
