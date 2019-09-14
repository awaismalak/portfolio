import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocopyRightComponent } from './focopy-right.component';

describe('FocopyRightComponent', () => {
  let component: FocopyRightComponent;
  let fixture: ComponentFixture<FocopyRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocopyRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocopyRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
