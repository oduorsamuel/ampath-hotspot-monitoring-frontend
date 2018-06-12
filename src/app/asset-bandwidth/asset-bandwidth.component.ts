import { Component, OnInit } from '@angular/core';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-asset-bandwidth',
  templateUrl: './asset-bandwidth.component.html',
  styleUrls: ['./asset-bandwidth.component.css']
})
export class AssetBandwidthComponent implements OnInit {
 public bandwidth;
  constructor(private assetService:AssetService) { }

  ngOnInit() {
    this.getBandwidthStat();
  }
  getBandwidthStat(){
    this.assetService.getBandwidthStat()
    .subscribe(result=>{
      this.bandwidth=result;
      console.log(result)
    

      })
  }

}
