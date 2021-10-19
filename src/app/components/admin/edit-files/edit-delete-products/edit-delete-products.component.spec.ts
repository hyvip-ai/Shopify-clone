import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteProductsComponent } from './edit-delete-products.component';

describe('EditDeleteProductsComponent', () => {
  let component: EditDeleteProductsComponent;
  let fixture: ComponentFixture<EditDeleteProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeleteProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
