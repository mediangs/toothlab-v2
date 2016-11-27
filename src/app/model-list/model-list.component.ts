import { Component, OnInit } from '@angular/core';
import {ModelService} from "../services/model.service";

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {

  title = "Root canal anatomy";
  modelList;

  constructor(
    private modelService : ModelService
  ) { }

  ngOnInit() {
    this.modelList = this.modelService.getModelList();
  }

}
