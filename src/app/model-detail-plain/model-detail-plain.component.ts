import {Component, OnInit, ElementRef, Renderer} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SpecimenService} from "../services/specimen.service";
import {Specimen, X3dModel} from "../services/specimen-schema";
import {Http} from "@angular/http";
import {SectionModelSchema, SectionSechema, ViewSectionSchema} from "../services/section-schema";

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

  specimen: Specimen;
  specimenId: string;

  color: string = '#0ff';
  modelWidth = 100;
  modelHeight = 100;

  sectionData: SectionModelSchema; //JSON
  coordIndex : ViewSectionSchema = {} ;
  coordPoints: ViewSectionSchema = {} ;

  constructor(private specimenService: SpecimenService,
              private route: ActivatedRoute,
              private router: Router,
              private el: ElementRef,
              private renderer: Renderer,
              private http: Http) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.specimenId = params['id'];
      this.specimen = this.specimenService.getSpecimenById(this.specimenId);
    });

    //color-picker사용을 위해 소문자로 바꾸어야함 ??
    this.specimen.x3dModels.forEach(el => {
      el.color = el.color.toLowerCase();
    });

    x3dom.reload();

    //this.restoreModelStatus()
    this.isLoading = false;

    this.specimenService.getSectionData(this.specimen)
      .subscribe(data => this.sectionData = data);

  }


  updateModelColor(x3d) {
    var el = document.getElementById(x3d.name + '__MA');
    if (el) {
      this.renderer.setElementAttribute(el, 'diffuseColor', x3d.color);
    }
  }

  restoreModelStatus() {
    this.specimen.x3dModels.forEach(el => {
      this.renderer.setElementAttribute(
        document.getElementById(el.name + '__MA'),
        'transparency', el.transparency.toString());

      this.renderer.setElementAttribute(
        document.getElementById(el.name + '__MA'),
        'diffuseColor', el.color);

    });
  }

  changeTransperancy(element: X3dModel, transperancy: number) {
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
    var keys = ['bdy_major_outline', 'cnl_pre_major_outline','cnl_pst_major_outline'];

    /*
    var goal = 5;
    section = this.sectionData.sections
      .reduce((prev, curr) => Math.abs(curr.section - goal) < Math.abs(prev.section - goal) ? curr : prev);
    */

    if (this.sectionData.sections[section]){
      keys.forEach(key => {
        var outline = this.sectionData.sections[section][key];
        this.coordPoints[key] = [].concat.apply([], outline);
        this.coordIndex[key]  = Object.keys(outline).map(x=>Number(x)).concat(0);
      });
      this.currentSection ++;
    }
  }

  gotoAnatomy() {
    this.router.navigate(['/specimen-list']);
  }

  reload() {
    this.restoreModelStatus()
  }


}
