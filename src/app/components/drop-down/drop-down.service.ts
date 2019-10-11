import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, retry} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {IDropdownCache, ServerDropdownOption} from '../../models/server-dropdown';

@Injectable({
  providedIn: 'root'
})
export class CustomDropdownService {

  private cache: Array<IDropdownCache> = [];

  constructor(private http: HttpClient) { }

  fetchData(guid) {
    console.log('hitting fetch data for guid: ' + guid);
    return this.http.get(`${environment.apiUrl}/api/cblookup/${guid}`)
      .pipe(
        map((options: any) => {
          return options.Data.map((option) => {
            return new ServerDropdownOption({
              value: option.id,
              name: option.name,
              selected: option.selected === 1,
            });
          });
          // this.cacheResult(guid, res);
          // return res;
        }),
        retry(2),
      );
  }

  private cacheResult(guid: string, res: Array<ServerDropdownOption>) {
    //
  }
}
