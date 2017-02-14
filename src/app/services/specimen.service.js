"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var specimen_data_1 = require('../../assets/data/specimen.data');
var SpecimenService = (function () {
    function SpecimenService(http) {
        this.http = http;
    }
    SpecimenService.prototype.getSpecimenList = function () {
        return specimen_data_1.SpecimenList;
    };
    SpecimenService.prototype.getSpecimenById = function (id) {
        return specimen_data_1.SpecimenList.filter(function (a) {
            return a.id == id;
        })[0];
    };
    SpecimenService.prototype.getSectionData = function (specimen) {
        return this.http.get(specimen.path + specimen.sections)
            .map(function (res) { return res.json(); });
    };
    SpecimenService = __decorate([
        core_1.Injectable()
    ], SpecimenService);
    return SpecimenService;
}());
exports.SpecimenService = SpecimenService;
