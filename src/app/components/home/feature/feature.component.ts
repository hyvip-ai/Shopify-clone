import { Component, OnInit } from '@angular/core';
import { FeatureService } from 'src/app/services/feature/feature.service';
import { Feature } from 'src/app/shared/Feature';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  constructor(private service:FeatureService) { }

  ngOnInit(): void {
  }
  FeatureData:Feature[]=this.service.FeatureData

}
