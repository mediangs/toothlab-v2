import { Component, OnInit, ElementRef, Renderer} from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { ModelService } from "../services/model.service";
import { ToothModel, X3dProperty } from "../services/tooth-model";
import {Http} from "@angular/http";
import {SectionsSchema} from "../services/sections-schema";

declare var x3dom: any;

@Component({
  selector: 'app-model-detail-plain',
  templateUrl: './model-detail-plain.component.html',
  styleUrls: ['./model-detail-plain.component.css']
})
export class ModelDetailPlainComponent implements OnInit {

  title = "Root canal anatomy detail";
  zoomed = false;
  isLoading = true;
  model : ToothModel;
  color : string = '#0ff';
  modelWidth = 100;
  modelHeight = 100;
  sectionData : SectionsSchema; //JSON
  merged
  keys



  constructor(
    private modelService : ModelService,
    private route : ActivatedRoute,
    private router : Router,
    private el : ElementRef,
    private renderer : Renderer,
    private http : Http
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

    this.modelService.getSectionData(this.model).subscribe(data => {
      this.sectionData = data;


      var outline = this.sectionData.sections[2].bdy_major_outline;

      this.merged = [].concat.apply([], outline);
      this.keys = Object.keys(outline).map(x=>Number(x)).concat(0);


    });

  }

  /*
  var outline = [[1,2,3], [2,3,4], [4,3,5]];
  var flattened = '[' + outline.reduce((acc, ele) => acc +' '+ ele.join(' '), '') +']';

  var idx = 0;
  var indexed  = '[' + outline.reduce((acc, ele) => acc + ' ' + (idx++).toString(),'') + ' 0]';

  console.log(flattened);
  console.log(indexed);



   var outline = [[1,2,3], [2,3,4], [4,3,5]];
   var merged = [].concat.apply([], outline);
   var index =[...Array(outline.length).keys()].concat(0);

   console.log(merged.join(' '));
   console.log(index.join(' '));

  */


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

  toggleZoom(){

    var button = document.getElementById('zoom-button');


    if(this.zoomed){
      button.style.backgroundColor = "#202021";

    } else{
      button.style.backgroundColor = "#c23621";

    }

    this.zoomed = !this.zoomed;

  }
  generateOutline(){

    var outline = this.sectionData.sections[1].bdy_major_outline;
    var merged = [].concat.apply([], outline);
    var keys = Object.keys(outline).map(x=>Number(x)).concat(0);
    return { point : merged, coordIndex : keys}


    //console.log(merged);
    //console.log(keys);

  }
  gotoAnatomy() {
    this.router.navigate(['/model-list']);
  }

  reload()
  {
    this.restoreModelStatus()
  }


}
