import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForterComponent } from './forter.component';

describe('ForterComponent', () => {
  let component: ForterComponent;
  let fixture: ComponentFixture<ForterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForterComponent]
    });
    fixture = TestBed.createComponent(ForterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
