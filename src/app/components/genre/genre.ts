import { Component, input } from '@angular/core';
import { Book } from '../book/book';
import { books } from '../../mock-books';
import { IGenre } from '../book/book.component';

@Component({
  selector: 'app-genre',
  imports: [Book],
  templateUrl: './genre.html',
  styleUrl: './genre.css',
})
export class Genre {
  genre = input.required<IGenre>();
}
