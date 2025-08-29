import { Component } from '@angular/core';
import { IGenre } from '../book/book.component';

@Component({
  selector: 'app-books-list',
  imports: [],
  templateUrl: './books-list.html',
  styleUrl: './books-list.css'
})
export class BooksList {
  genre: IGenre[] = []
  
}
