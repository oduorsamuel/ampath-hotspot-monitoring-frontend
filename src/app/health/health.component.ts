import { Component, OnInit } from '@angular/core';
import { AssetService } from '../asset.service';



@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
public locations;
constructor(private assetService:AssetService) { }

  ngOnInit() {
    this.getHealthStat();
  }
  getHealthStat(){
    this.assetService.getHealthStat()
    .subscribe(result=>{
     this.locations = result;
    console.log(result)
      

      })
  }

}
