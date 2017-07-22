import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import {Book} from "../_models/book.model";
import 'rxjs/Rx';

@Injectable()
export class BooksService {

  constructor(private http: Http) { }


  getBooks(){
    const response:Observable<Response> = this.http.get('assets/book-list.json');
    const books:Observable<Book[]> = response.map(this.pharseBookList.bind(this)).catch(this.handleError);
    return books;
  }

  pharseBookList(response):Book[]{
    let data = response.json();
    let list:Book[]= [];
    for (let i = 0 ; i < data.bookList.length; i++){
      let book:Book = new Book(data.bookList[i].id, data.bookList[i].name, data.bookList[i].author, data.bookList[i].coverPhoto);
      book.date = data.bookList[i].date;
      list.push(book);
    }
    return list;
  }

  handleError(error:Response | any):Observable<string> {

    // In a real world app, we might use a remote logging infrastructure
    let errMsg:string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  correctText(text){
    const regex = /[_+!@#$%^&*();\/|<>"']/g;
    let cleanArg = text.replace(regex,text =>''); // remove special characters

    return this.upperCaseWords(cleanArg);
  }

  upperCaseWords(str) {
    let res = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()});
    return res;

  }
}
