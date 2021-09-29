import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureProductCardsComponent } from './feature-product-cards.component';

describe('FeatureProductCardsComponent', () => {
  let component: FeatureProductCardsComponent;
  let fixture: ComponentFixture<FeatureProductCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureProductCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureProductCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
