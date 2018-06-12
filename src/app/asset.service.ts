import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AssetService {
  url='https://ngx.ampath.or.ke/hotspot-monitoring/'
  constructor(private http:Http) { }

  public getHealthStat():Observable<any>{ 
    return this.http.get(this.url+'hotspot-health-stats').map(result => result.json());
    
 }
 public getBandwidthStat():Observable<any>{ 
  return this.http.get(this.url+'hotspot-bandwidth-stats').map(result => result.json());
}

}

