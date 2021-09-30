import { Component, OnInit } from '@angular/core';
import { FeaturedcollectionService } from 'src/app/services/featured-colleaction/featuredcollection.service';
import { FeatureCard } from 'src/app/shared/Feature-card';

@Component({
  selector: 'app-feature-cards',
  templateUrl: './feature-cards.component.html',
  styleUrls: ['./feature-cards.component.css']
})
export class FeatureCardsComponent implements OnInit {

  constructor(private featurecard:FeaturedcollectionService) { }

  ngOnInit(): void {
  }
  featureCardsData:FeatureCard[]= this.featurecard.featuredColleactionData
}
