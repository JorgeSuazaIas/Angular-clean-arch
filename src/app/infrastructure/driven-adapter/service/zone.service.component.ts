import { Component, OnInit } from '@angular/core';

import { IZoneRequest } from "src/app/infrastructure/driven-adapter/user/zone.module";
import { Observable } from "rxjs";
import { IZoneModel } from "src/app/domain/models/zone/zone.module";
import { ZoneGateway } from 'src/app/domain/models/zone/gateway/zone.gateway';

@Component({
  selector: 'app-zone.service',
  templateUrl: './zone.service.component.html',
  styleUrls: ['./zone.service.component.scss']
})
export class Zone.ServiceComponent extends ZoneGateway {
  API_URL : string = 'http://localhost:8087/zone';
  private httpHeaders = new HttpHeaders({"Content-Type":"application/json"})

  constructor(private http: HttpClient) {
    super();
  }

  

  create(zone: IZoneRequest): Observable<IZoneModel> {
    return this.http.post <any> (this.API_URL, zone)
   } 

}
