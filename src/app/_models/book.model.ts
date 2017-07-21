import {Date} from "./date.model";
export class Book {

  constructor(id:number,name:string,author:string,coverPhoto:string){
    this.id = id;
    this.name = name;
    this.author = author;
    this.coverPhoto = coverPhoto;
  }

  id:number;
  name:string;
  author:string;
  date:Date;
  coverPhoto:string;

}
