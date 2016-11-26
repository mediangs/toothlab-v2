import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  //styleUrls: ['./material.component.css']
  styleUrls : [ "https://unpkg.com/@angular/material/core/theming/prebuilt/indigo-pink.css"],
  encapsulation: ViewEncapsulation.None

})
export class MaterialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
