import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteCollectionComponent } from './edit-delete-collection.component';

describe('EditDeleteCollectionComponent', () => {
  let component: EditDeleteCollectionComponent;
  let fixture: ComponentFixture<EditDeleteCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeleteCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
