import {Injectable} from '@angular/core';
import {Specimen} from './specimen-schema';
import {SpecimenList} from '../../assets/data/specimen.data';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {SectionModelSchema} from "./section-schema";

@Injectable()
export class SpecimenService{

  constructor(private http : Http){}

  getSpecimenList(): Specimen[] {
      return SpecimenList;
  }

  getSpecimenById(id : string) : Specimen{
      return SpecimenList.filter(function(a){
          return a.id== id;
      })[0];
  }

  getSectionData(specimen:Specimen) : Observable<SectionModelSchema>{
    return this.http.get(specimen.path + specimen.sections)
      .map(res=>res.json());
  }



}


