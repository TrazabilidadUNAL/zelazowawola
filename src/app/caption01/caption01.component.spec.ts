import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Caption01Component } from './caption01.component';

describe('Caption01Component', () => {
  let component: Caption01Component;
  let fixture: ComponentFixture<Caption01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Caption01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Caption01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
