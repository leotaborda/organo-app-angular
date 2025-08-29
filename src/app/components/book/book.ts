import { Component, input } from '@angular/core';
import { IBook } from './book.component';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  book = input.required<IBook>();

  alterarFavorito() {
    this.book().favorite = !this.book().favorite;
  }
}
