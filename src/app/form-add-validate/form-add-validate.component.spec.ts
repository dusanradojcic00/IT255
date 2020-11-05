import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddValidateComponent } from './form-add-validate.component';

describe('FormAddValidateComponent', () => {
  let component: FormAddValidateComponent;
  let fixture: ComponentFixture<FormAddValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddValidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
