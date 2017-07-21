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

  @Input() book;
  bookForm:FormGroup;

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.bookForm = new FormGroup({
      name: new FormControl(this.book.name, Validators.required),
      author: new FormControl(this.book.author, Validators.required),
      date: new FormControl(this.book.date, Validators.required),
      coverPhoto: new FormControl(this.book.coverPhoto, Validators.required)
    })
  }

  onSubmit(){
    this.book.name = this.bookForm.value.name;
    this.book.author = this.bookForm.value.author;
    this.book.date = this.bookForm.value.date;
    this.book.coverPhoto = this.bookForm.value.coverPhoto;
  }

}
