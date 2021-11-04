import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteBannerComponent } from './edit-delete-banner.component';

describe('EditDeleteBannerComponent', () => {
  let component: EditDeleteBannerComponent;
  let fixture: ComponentFixture<EditDeleteBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeleteBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
