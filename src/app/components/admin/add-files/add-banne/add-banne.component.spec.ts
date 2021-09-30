import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBanneComponent } from './add-banne.component';

describe('AddBanneComponent', () => {
  let component: AddBanneComponent;
  let fixture: ComponentFixture<AddBanneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBanneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
