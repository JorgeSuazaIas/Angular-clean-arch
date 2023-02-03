import { Observable } from "rxjs/internal/Observable";
import { IZoneRequest } from "src/app/infrastructure/driven-adapter/user/zone.module";
import { IZoneModel } from "src/app/domain/models/zone/zone.module";

export abstract class ZoneGateway {
    abstract create(params:IZoneRequest): Observable<IZoneModel>;
    
}
export { IZoneModel };

