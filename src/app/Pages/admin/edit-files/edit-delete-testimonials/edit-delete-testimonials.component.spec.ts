import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteTestimonialsComponent } from './edit-delete-testimonials.component';

describe('EditDeleteTestimonialsComponent', () => {
  let component: EditDeleteTestimonialsComponent;
  let fixture: ComponentFixture<EditDeleteTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeleteTestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
