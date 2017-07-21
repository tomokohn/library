import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import {BooksService} from "./_services/books.service";
import { ModalFormComponent } from './modal-form/modal-form.component';

import { CorrectTextPipe } from './_pipes/correctText.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    ModalFormComponent,
    CorrectTextPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()

  ],
  providers: [
    BooksService
  ],
  bootstrap: [AppComponent],
  entryComponents:[ModalFormComponent]
})
export class AppModule { }
