import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteMiddleBannerComponent } from './edit-delete-middle-banner.component';

describe('EditDeleteMiddleBannerComponent', () => {
  let component: EditDeleteMiddleBannerComponent;
  let fixture: ComponentFixture<EditDeleteMiddleBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeleteMiddleBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteMiddleBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
