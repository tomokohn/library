import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'correctText'})
export class CorrectTextPipe implements PipeTransform {
  transform(arg) : any {
    const regex = /[_+!@#$%^&*();\/|<>"']/g;
     let cleanArg = arg.replace(regex,arg =>''); // remove special characters

    return this.upperCaseWords(cleanArg);
  }

  upperCaseWords(str) {
    let res = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()});
    return res;
    }


}
