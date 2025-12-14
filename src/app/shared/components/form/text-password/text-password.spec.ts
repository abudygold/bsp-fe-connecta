import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPassword } from './text-password';

describe('TextPassword', () => {
  let component: TextPassword;
  let fixture: ComponentFixture<TextPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextPassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextPassword);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
