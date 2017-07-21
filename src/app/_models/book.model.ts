export class Book {

  constructor(id:number,name:string,author:string,date:string,coverPhoto:string){
    this.id = id;
    this.name = name;
    this.author = author;
    this.date = date;
    this.coverPhoto = coverPhoto;
  }

  id:number;
  name:string;
  author:string;
  date:string;
  coverPhoto:string;

}
