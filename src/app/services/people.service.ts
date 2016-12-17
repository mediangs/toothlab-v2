import {Injectable} from '@angular/core';
import {people} from '../../assets/data/people.data';

@Injectable()
export class PeopleService{
    getPeople(){
        return people;
    }
}
