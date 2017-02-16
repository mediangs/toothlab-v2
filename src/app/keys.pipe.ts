import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any, args: any[] = null): any {

    var a =[];
    for (var key in value){
      if (value.hasOwnProperty(key)){
        a.push({key:key, val : value[key]});
      }
    }
    return a;
    //return value ;
    //return  Object.keys(value).map(key=>value(key));

    //return Object.keys(value).map(key => value[key]);
    /*
    let keys = [];
    for(let key in value){
      keys.push(key);

    }
    return keys;
    */
  }

}
