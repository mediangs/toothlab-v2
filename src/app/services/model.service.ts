import {Injectable} from '@angular/core';
import {ToothModel} from './tooth-model';
import {ModelList} from '../../assets/data/models.data';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ModelService{

  constructor(private http : Http){}

  getModelList(): ToothModel[] {
      return ModelList;
  }

  getModelById(id : string) : ToothModel{
      return ModelList.filter(function(a){
          return a.id== id;
      })[0];
  }

/*
  getSectionData(id:string) : Observable<string>{
    var model = this.getModelById(id);
    var sectionFile = model.path + model.sections;

    return this.http.request(sectionFile).map(res=>res.json());
  }
*/

  getSectionData(model:ToothModel) : Observable<string>{
    return this.http.get(model.path + model.sections)
      .map(res=>res.json());
  }



}


