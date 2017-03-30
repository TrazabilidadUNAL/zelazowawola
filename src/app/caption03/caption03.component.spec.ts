import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Caption03Component } from './caption03.component';

describe('Caption03Component', () => {
  let component: Caption03Component;
  let fixture: ComponentFixture<Caption03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Caption03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Caption03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
