import {Injectable} from '@angular/core';
import {PublicationList} from '../../assets/data/publications.data';

@Injectable()
export class PublicationsService{
    getPublications(){
        return PublicationList;
    }
}
