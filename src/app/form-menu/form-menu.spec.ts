import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMenu } from './form-menu';

describe('FormMenu', () => {
  let component: FormMenu;
  let fixture: ComponentFixture<FormMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
