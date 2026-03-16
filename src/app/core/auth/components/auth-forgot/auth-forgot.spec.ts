import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthForgot } from './auth-forgot';

describe('AuthForgot', () => {
  let component: AuthForgot;
  let fixture: ComponentFixture<AuthForgot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthForgot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthForgot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
