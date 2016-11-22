import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';

declare var x3dom: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items = [];

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.items.push({
      translation: '0 0 0',
      diffuseColor: '1 0 0',
      type: 'box'
    });
    x3dom.reload();
  }

  clicked() {
    if (this.items.length == 1) {
      this.items.push({
        translation: '3 0 0',
        diffuseColor: '0 1 0',
        type: 'cone'
      })
    }
    else if (this.items.length == 2) {
      this.items.push({
        translation: '-3 0 0',
        diffuseColor: '0 0 1',
        type: 'sphere'
      })
    }
  }


}
