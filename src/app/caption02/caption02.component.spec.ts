import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Caption02Component } from './caption02.component';

describe('Caption02Component', () => {
  let component: Caption02Component;
  let fixture: ComponentFixture<Caption02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Caption02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Caption02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
