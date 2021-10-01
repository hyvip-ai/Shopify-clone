import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeaturedImagesComponent } from './add-featured-images.component';

describe('AddFeaturedImagesComponent', () => {
  let component: AddFeaturedImagesComponent;
  let fixture: ComponentFixture<AddFeaturedImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFeaturedImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeaturedImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
