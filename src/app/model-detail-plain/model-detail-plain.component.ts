import {Component, OnInit, ElementRef, Renderer} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ModelService} from "../services/model.service";
import {ToothModel, X3dProperty} from "../services/tooth-model";
import {Http} from "@angular/http";
import {SectionsSchema, SectionSechema} from "../services/sections-schema";

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
  model: ToothModel;
  color: string = '#0ff';
  modelWidth = 100;
  modelHeight = 100;
  sectionData: SectionsSchema; //JSON

  coordIndex : SectionSechema ;
  coordPoints : SectionSechema;


  constructor(private modelService: ModelService,
              private route: ActivatedRoute,
              private router: Router,
              private el: ElementRef,
              private renderer: Renderer,
              private http: Http) {
  }

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
      var outline;
      var section: SectionSechema;

      //section = this.sectionData.sections.filter(x => x.section === 1);
      var goal = 5;
      section = this.sectionData.sections
        .reduce((prev, curr) => Math.abs(curr.section - goal) < Math.abs(prev.section - goal) ? curr : prev);
      //console.log(section);

      //outline = section.bdy_major_outline;

      //this.coordPoints[''] = [].concat.apply([], outline);
      //this.coordIndex = Object.keys(outline).map(x => Number(x)).concat(0);


    });

  }


  updateModelColor(x3d) {
    var el = document.getElementById(x3d.name + '__MA');
    if (el) {
      this.renderer.setElementAttribute(el, 'diffuseColor', x3d.color);
    }
  }

  restoreModelStatus() {
    this.model.x3ds.forEach(el => {
      this.renderer.setElementAttribute(
        document.getElementById(el.name + '__MA'),
        'transparency', el.transparency.toString());

      this.renderer.setElementAttribute(
        document.getElementById(el.name + '__MA'),
        'diffuseColor', el.color);

    });
  }

  changeTransperancy(element: X3dProperty, transperancy: number) {
    element.prevTransperancy = element.transparency;
    element.transparency = transperancy;
    this.renderer.setElementAttribute(
      document.getElementById(element.name + '__MA'),
      'transparency', element.transparency.toString());
  }

  toggleZoom() {

    var button = document.getElementById('zoom-button');


    if (this.zoomed) {
      button.style.backgroundColor = "#202021";

    } else {
      button.style.backgroundColor = "#c23621";

    }

    this.zoomed = !this.zoomed;

  }

  currentSection = 0;
  getIndexedLineSet(section) {
    console.log(this.currentSection);
    if (this.sectionData.sections[section]){
      var outline = this.sectionData.sections[section].bdy_major_outline;
      this.coordPoints.bdy_major_outline = [].concat.apply([], outline);
      this.coordIndex.bdy_major_outline  = Object.keys(outline).map(x=>Number(x)).concat(0);
      this.currentSection ++;
    }



    //console.log(merged);
    //console.log(keys);

  }

  gotoAnatomy() {
    this.router.navigate(['/model-list']);
  }

  reload() {
    this.restoreModelStatus()
  }


}
