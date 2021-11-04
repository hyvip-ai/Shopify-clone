import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteImageSingleComponent } from './edit-delete-image-single.component';

describe('EditDeleteImageSingleComponent', () => {
  let component: EditDeleteImageSingleComponent;
  let fixture: ComponentFixture<EditDeleteImageSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeleteImageSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteImageSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
