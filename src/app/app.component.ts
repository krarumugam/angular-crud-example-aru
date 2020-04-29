import { Component } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
   ,  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-crud-example-aru';

  constructor(private commonService:CommonService){}
}
