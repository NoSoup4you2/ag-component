import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { IServerDropdownOption } from './models/server-dropdown';
import { GuidService} from './services/guid.service';
import { shareReplay } from 'rxjs/operators';
import { DropdownGuids } from '../app/models/dropdown-guids.enum';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  guids = DropdownGuids;
  title = 'ag-component';
  countryOptions$: Observable<Array<IServerDropdownOption>>;
  socialOptions$: Observable<Array<IServerDropdownOption>>;



  form = new FormGroup({
    social: new FormControl(''),
    country: new FormControl(''),
    test: new FormControl(''),
    combo1: new FormControl(''),
    combo2: new FormControl(''),
  });


  constructor(
    private guidService: GuidService
  ) {}

  ngOnInit() {

    this.socialOptions$ = this.guidService.fetchAll(this.guids.SOCIAL_LABELS).pipe(shareReplay());
    //this.form.removeControl('test');
    this.onChanges();


  }

  ngOnDestroy() {
}

writeStuff() {

}

create(formData) {
  // this.countryOptions$ = this.guidService.fetchAll(this.guids.RELATIONSHIP_TYPES).pipe(shareReplay());
  console.log(formData);

}

onChanges(): void {
  this.form.get('social').valueChanges.subscribe(val => {
    if (val === 'Twitter') {
      this.countryOptions$ = this.guidService.fetchAll(this.guids.RELATIONSHIP_TYPES).pipe(shareReplay());
    } else {
      this.countryOptions$ = of([])
      console.log(`New Value is ${val}.`);
    }

  });
}

}
