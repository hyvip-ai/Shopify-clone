import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMiddleBannerComponent } from './add-middle-banner.component';

describe('AddMiddleBannerComponent', () => {
  let component: AddMiddleBannerComponent;
  let fixture: ComponentFixture<AddMiddleBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMiddleBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMiddleBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
