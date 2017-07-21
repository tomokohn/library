import {Pipe, PipeTransform} from '@angular/core';
@Pipe({name: 'correctText'})
export class CorrectTextPipe implements PipeTransform {
  transform(arg) : any {
    //const pattern = /[a-zA-Z0-9 &\.-]\w/
    // for (let i = 0; i<arg.length; i++){
    //       if (arg[i] != pattern) {
    //         arg.slice(i,1);
    //   }
    // }
      this.camelize(arg);
    debugger
    return arg;
  }

  camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}
}
