import {Injectable} from '@angular/core';
import {people} from '../data/people.data';

@Injectable()
export class PeopleService{
    getPeople(){
        return people;
    }
}
