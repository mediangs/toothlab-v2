"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ModelDetailPlainComponent = (function () {
    function ModelDetailPlainComponent(specimenService, route, router, el, renderer, http) {
        this.specimenService = specimenService;
        this.route = route;
        this.router = router;
        this.el = el;
        this.renderer = renderer;
        this.http = http;
        this.title = "Root canal anatomy detail";
        this.zoomed = false;
        this.isLoading = true;
        this.color = '#0ff';
        this.modelWidth = 100;
        this.modelHeight = 100;
        this.currentSection = 0;
    }
    ModelDetailPlainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.specimen = _this.specimenService.getSpecimenById(params['id']);
        });
        //color-picker사용을 위해 소문자로 바꾸어야함 ??
        this.specimen.x3dModels.forEach(function (el) {
            el.color = el.color.toLowerCase();
        });
        x3dom.reload();
        //this.restoreModelStatus()
        this.isLoading = false;
        this.specimenService.getSectionData(this.specimen).subscribe(function (data) {
            _this.sectionData = data;
            /*
            var outline;
            var section: SectionSechema;

            //section = this.sectionData.sections.filter(x => x.section === 1);
            var goal = 5;
            section = this.sectionData.sections
              .reduce((prev, curr) => Math.abs(curr.section - goal) < Math.abs(prev.section - goal) ? curr : prev);
            //console.log(section);

            outline = section.bdy_major_outline;

            this.coordPoints.bdy_major_outline = [].concat.apply([], outline);
            this.coordIndex.bdy_major_outline = Object.keys(outline).map(x => Number(x)).concat(0);
            console.log(this.coordIndex.bdy_major_outline);
            */
        });
    };
    ModelDetailPlainComponent.prototype.updateModelColor = function (x3d) {
        var el = document.getElementById(x3d.name + '__MA');
        if (el) {
            this.renderer.setElementAttribute(el, 'diffuseColor', x3d.color);
        }
    };
    ModelDetailPlainComponent.prototype.restoreModelStatus = function () {
        var _this = this;
        this.specimen.x3dModels.forEach(function (el) {
            _this.renderer.setElementAttribute(document.getElementById(el.name + '__MA'), 'transparency', el.transparency.toString());
            _this.renderer.setElementAttribute(document.getElementById(el.name + '__MA'), 'diffuseColor', el.color);
        });
    };
    ModelDetailPlainComponent.prototype.setTransparency = function (element, transperancy) {
        element.prevTransperancy = element.transparency;
        element.transparency = transperancy;
        this.renderer.setElementAttribute(document.getElementById(element.name + '__MA'), 'transparency', element.transparency.toString());
    };
    ModelDetailPlainComponent.prototype.toggleZoom = function () {
        var button = document.getElementById('zoom-button');
        if (this.zoomed) {
            button.style.backgroundColor = "#202021";
        }
        else {
            button.style.backgroundColor = "#c23621";
        }
        this.zoomed = !this.zoomed;
    };
    ModelDetailPlainComponent.prototype.setIndexedLineSet = function (section) {
        //console.log(this.currentSection);
        if (this.sectionData.sections[section]) {
            var outline = this.sectionData.sections[section].bdy_major_outline;
            this.coordPoints['bdy_major_outline'] = [].concat.apply([], outline);
            this.coordIndex['bdy_major_outline'] = Object.keys(outline).map(function (x) { return Number(x); }).concat(0);
            this.currentSection++;
            console.log(this.coordIndex);
        }
        //console.log(merged);
        //console.log(keys);
    };
    ModelDetailPlainComponent.prototype.gotoAnatomy = function () {
        this.router.navigate(['/specimen-list']);
    };
    ModelDetailPlainComponent.prototype.reload = function () {
        this.restoreModelStatus();
    };
    ModelDetailPlainComponent = __decorate([
        core_1.Component({
            selector: 'app-model-detail-plain',
            templateUrl: './model-detail-plain.component.html',
            styleUrls: ['./model-detail-plain.component.css']
        })
    ], ModelDetailPlainComponent);
    return ModelDetailPlainComponent;
}());
exports.ModelDetailPlainComponent = ModelDetailPlainComponent;
