import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteFamousProductComponent } from './edit-delete-famous-product.component';

describe('EditDeleteFamousProductComponent', () => {
  let component: EditDeleteFamousProductComponent;
  let fixture: ComponentFixture<EditDeleteFamousProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeleteFamousProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteFamousProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
