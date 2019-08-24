import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-appversion',
  templateUrl: './appversion.component.html',
  styles: []
})
export class AppversionComponent implements OnInit {

  appversion: string = require('../../../package.json').version;
  appbuildversion: string = require('../../../package.json').buildversion;
  constructor() { }

  ngOnInit() {
  }

}
