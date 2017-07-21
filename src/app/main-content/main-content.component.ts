import { Component, OnInit } from '@angular/core';
import {BooksService} from "../_services/books.service";
import {Book} from "../_models/book.model";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private bookService:BooksService) { }
  books:Book[];
  displayedColumns = ['Name', 'Author', 'Date'];


  ngOnInit() {
    this.getBooks();
  }

  getBooks(){
    this.bookService.getBooks().subscribe( res =>{
      this.books = res;
    })
  }

}
