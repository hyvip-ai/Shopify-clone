import { Component, OnInit } from '@angular/core';
import { FeatureService } from 'src/app/services/feature/feature.service';
import { Feature } from 'src/app/shared/Feature';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
})
export class FeatureComponent implements OnInit {
  constructor(private service: FeatureService) {}
  data: any = null;
  ngOnInit(): void {
    if (localStorage.getItem('storeId')) {
      this.service.getAllFeatures().subscribe(
        (res) => {
          console.log(res);
          this.data = res;

          for (let item of this.data.data) {
            var myobj = {
              image: '',
              head: '',
              data: '',
            };
            myobj.image = item.image;
            myobj.head = item.head;
            myobj.data = item.data;
            this.FeatureData.push(myobj);
          }
        },
        (err) => {
          this.FeatureData = this.FeatureDataTemp;
        }
      );
    } else {
      this.FeatureData = this.FeatureDataTemp;
    }
  }
  FeatureData: Feature[] = [];
  FeatureDataTemp: Feature[] = this.service.FeatureData;
}
