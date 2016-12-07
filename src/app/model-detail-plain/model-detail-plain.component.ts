
import { Component, OnInit, ElementRef, Renderer} from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { ModelService } from "../services/model.service";
import { ToothModel, X3dProperty } from "../services/tooth-model";

declare var x3dom: any;



@Component({
  selector: 'app-model-detail-plain',
  templateUrl: './model-detail-plain.component.html',
  styleUrls: ['./model-detail-plain.component.css']
})
export class ModelDetailPlainComponent implements OnInit {

  title = "Root canal anatomy detail - Plain view ";
  isLoading = true;
  model : ToothModel;
  model_url : string;
  model_name : string;

  color : string = '#0ff';

  constructor(
    private modelService : ModelService,
    private route : ActivatedRoute,
    private router : Router,
    private el : ElementRef,
    private renderer : Renderer
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.model = this.modelService.getModelById(params['id']);
      this.model_name = this.model.x3ds[0].name
      this.model_url = this.model.path+this.model_name+".x3d";

    });

    //color-picker사용을 위해 소문자로 바꾸어야함 ??
    this.model.x3ds.forEach(el => {
      el.color = el.color.toLowerCase();
    });

    x3dom.reload();

    //this.restoreModelStatus()
    this.isLoading = false;
  }






}
