import {Injectable} from '@angular/core';
import {PublicationList} from '../data/publications.data';

@Injectable()
export class PublicationsService{
    getPublications(){
        return PublicationList;
    }
}