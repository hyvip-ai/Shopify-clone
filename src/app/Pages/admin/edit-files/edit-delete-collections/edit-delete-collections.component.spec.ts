import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeleteCollectionsComponent } from './edit-delete-collections.component';

describe('EditDeleteCollectionsComponent', () => {
  let component: EditDeleteCollectionsComponent;
  let fixture: ComponentFixture<EditDeleteCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeleteCollectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeleteCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
