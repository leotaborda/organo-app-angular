import { Component } from '@angular/core';
import { Book } from '../book/book';
import { Books } from '../../mock-books';

@Component({
  selector: 'app-genre',
  imports: [Book],
  templateUrl: './genre.html',
  styleUrl: './genre.css'
})
export class Genre {
  book = Books[0]

}
