import {Injectable} from '@angular/core';
import {ToothModel} from './tooth-model';
import {ModelList} from '../data/models.data';

@Injectable()
export class ModelService{
    getModelList(): ToothModel[] {
        return ModelList;
    }

    getModelById(id : string) : ToothModel{
        return ModelList.filter(function(a){
            return a.id== id;
        })[0];
    }
}


