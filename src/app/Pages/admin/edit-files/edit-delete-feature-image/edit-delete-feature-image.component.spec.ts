import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteFeatureImageComponent } from './edit-delete-feature-image.component';

describe('EditDeleteFeatureImageComponent', () => {
  let component: EditDeleteFeatureImageComponent;
  let fixture: ComponentFixture<EditDeleteFeatureImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeleteFeatureImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteFeatureImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
