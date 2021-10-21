import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSingleTestimonialComponent } from './edit-single-testimonial.component';

describe('EditSingleTestimonialComponent', () => {
  let component: EditSingleTestimonialComponent;
  let fixture: ComponentFixture<EditSingleTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSingleTestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSingleTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
