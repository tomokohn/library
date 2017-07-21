import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Book} from "../_models/book.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  @Input() book:Book = null;
  @Input() books:Book[];
  @Input() isEdit:boolean;
  alertTitleExist:boolean = false;
  bookForm:FormGroup;

  ngOnInit() {
    this.initForm();
    this.bookForm.valueChanges.subscribe(()=>{ // hide alert when form changed
      this.alertTitleExist = false;
    })
  }

  initForm(){
    if (this.isEdit){
      this.bookForm = new FormGroup({
        name: new FormControl(this.book.name, Validators.required),
        author: new FormControl(this.book.author, Validators.required),
        date: new FormControl(this.book.date, Validators.required),
        coverPhoto: new FormControl(this.book.coverPhoto, Validators.required)
      });
    } else {
      this.bookForm = new FormGroup({
        name: new FormControl('', Validators.required),
        author: new FormControl('', Validators.required),
        date: new FormControl('', Validators.required),
        coverPhoto: new FormControl('', Validators.required)
      });
    }

  }

  onSubmit(){
    let isExist = this.checkIfTitleExist(this.bookForm.value.name,this.book, this.books);
    if (isExist){
      this.alertTitleExist = true;
      return;
    }
    if (this.isEdit) {
      this.book.name = this.bookForm.value.name;
      this.book.author = this.bookForm.value.author;
      this.book.date = this.bookForm.value.date;
      this.book.coverPhoto = this.bookForm.value.coverPhoto;
      this.activeModal.close('Close click');
    } else {
      let index = this.books[this.books.length -1]["id"] + 1;
      let newBook = new Book(index,this.bookForm.value.name,this.bookForm.value.author,this.bookForm.value.coverPhoto);
      newBook.date = {
        year: this.bookForm.value.date.year,
        month: this.bookForm.value.date.month,
        day: this.bookForm.value.date.day
      }
      this.books.push(newBook);
      this.activeModal.close('Close click');
    }
  }

  checkIfTitleExist(title,book,books){
    for (let i=0; i<books.length;i++){
      let oldTitle = books[i].name.toLowerCase();
      let newTilte = title.toLowerCase();
      let id = books[i].id;
      if (book != null && newTilte == oldTitle && book.id != id ||
          book === null && newTilte == oldTitle) {
        return true;
      }
    }
    return false;
  }

}
