import { Component, OnInit } from '@angular/core';
import {SpecimenService} from "../services/specimen.service";

@Component({
  selector: 'app-specimen-list',
  templateUrl: 'specimen-list.component.html',
  styleUrls: ['specimen-list.component.css']
})
export class SpecimenListComponent implements OnInit {

  title = "Root canal anatomy";
  specimenList;

  constructor(
    private specimenService : SpecimenService
  ) { }

  ngOnInit() {
    this.specimenList = this.specimenService.getSpecimenList();
  }

}
