import { Component, OnInit } from '@angular/core';
import {BooksService} from "../_services/books.service";
import {Book} from "../_models/book.model";
import { ModalFormComponent } from '../modal-form/modal-form.component';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private bookService:BooksService,
              private modalService: NgbModal) { }
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

  openModal(book) {
    const modalRef = this.modalService.open(ModalFormComponent);
    modalRef.componentInstance.book = book;
    modalRef.componentInstance.books = this.books;
    modalRef.componentInstance.isEdit = true;
  }

  AddNewBookClicked(){
    const modalRef = this.modalService.open(ModalFormComponent);
    modalRef.componentInstance.books = this.books;
    modalRef.componentInstance.isEdit = false;
  }

  deleteBook(book){
    for(let i=0; i<this.books.length; i++){
      if (book.id === this.books[i].id) {
        this.books.splice(i,1);
        break;
      }
    }
  }
}
