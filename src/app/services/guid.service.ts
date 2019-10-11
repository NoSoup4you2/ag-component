import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IServerDropdownOption, ServerDropdownOption} from '../models/server-dropdown';
import {map} from 'rxjs/operators';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GuidService {

    constructor(public api: ApiService) {}

    fetchAll(guid: string): Observable<IServerDropdownOption[]> {
        return this.api.get({endpoint: '/api/cblookup/' + guid , useAuthUrl: true}).pipe(
            map((res: any) => {
                return res.Data.map(option => {
                    return new ServerDropdownOption({
                        value: option.id,
                        name: option.name,
                        selected: option.selected,
                    });
                });
            }),
        );
    }
}
