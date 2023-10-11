import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowConstraintsComponent } from './show-constraints.component';

describe('ShowConstraintsComponent', () => {
  let component: ShowConstraintsComponent;
  let fixture: ComponentFixture<ShowConstraintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowConstraintsComponent]
    });
    fixture = TestBed.createComponent(ShowConstraintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
