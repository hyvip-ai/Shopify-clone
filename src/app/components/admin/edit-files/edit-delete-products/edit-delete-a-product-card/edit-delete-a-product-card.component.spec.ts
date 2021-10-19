import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteAProductCardComponent } from './edit-delete-a-product-card.component';

describe('EditDeleteAProductCardComponent', () => {
  let component: EditDeleteAProductCardComponent;
  let fixture: ComponentFixture<EditDeleteAProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeleteAProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteAProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
