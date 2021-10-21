import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteFamousProductsComponent } from './edit-delete-famous-products.component';

describe('EditDeleteFamousProductsComponent', () => {
  let component: EditDeleteFamousProductsComponent;
  let fixture: ComponentFixture<EditDeleteFamousProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeleteFamousProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteFamousProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
