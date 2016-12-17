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

  title = "Root canal anatomy detail";
  isLoading = true;
  model : ToothModel;
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
    });

    //color-picker사용을 위해 소문자로 바꾸어야함 ??
    this.model.x3ds.forEach(el => {
      el.color = el.color.toLowerCase();
    });

    x3dom.reload();

    //this.restoreModelStatus()
    this.isLoading = false;
  }


  updateModelColor(x3d){
    var el = document.getElementById(x3d.name+'__MA') ;
    if (el) {
      this.renderer.setElementAttribute(el, 'diffuseColor', x3d.color);
    }
  }

  restoreModelStatus(){
    this.model.x3ds.forEach(el => {
      this.renderer.setElementAttribute(
        document.getElementById(el.name+'__MA'),
        'transparency', el.transparency.toString());

      this.renderer.setElementAttribute(
        document.getElementById(el.name+'__MA'),
        'diffuseColor', el.color);

    });
  }

  changeTransperancy(element : X3dProperty, transperancy : number){
    element.prevTransperancy = element.transparency;
    element.transparency = transperancy;
    this.renderer.setElementAttribute(
      document.getElementById(element.name+'__MA'),
      'transparency', element.transparency.toString());
  }

  gotoAnatomy() {
    this.router.navigate(['/model-list']);
  }

  reload()
  {
    this.restoreModelStatus()
  }


}