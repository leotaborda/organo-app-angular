import { Component, input } from '@angular/core';
import { IBook } from './book.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  imports: [CommonModule],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  book = input.required<IBook>();

  alterarFavorito() {
    this.book().favorite = !this.book().favorite;
  }
}
