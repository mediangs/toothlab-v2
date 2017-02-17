import { Pipe, PipeTransform } from '@angular/core';

/*
 Dynamically updating [checked] in Angular2
 http://stackoverflow.com/questions/39941185/dynamically-updating-checked-in-angular2/39941399#39941399

this.myobj = { a : [1,2,3], b:[4,5,6]};
   === VS ====
this.myobj['a']=[1,2,3];
this.myobj['b']=[1,2,3];

for detecting change of object, use 'pure:false'

*/

@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipe implements PipeTransform {

  transform(value: any, args: any[] = null): any {
    return  Object.keys(value);
  }

}
