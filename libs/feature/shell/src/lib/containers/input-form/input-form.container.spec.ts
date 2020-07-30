import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormContainer } from './input-form.container';

describe('InputFormContainer', () => {
  let component: InputFormContainer;
  let fixture: ComponentFixture<InputFormContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFormContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
