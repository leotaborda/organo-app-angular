import { Component, OnInit } from '@angular/core';
import { IBook, IGenre } from '../book/book.component';
import { Book } from '../book/book';
import { books } from '../../mock-books';
import { Genre } from "../genre/genre";

@Component({
  selector: 'app-books-list',
  imports: [Genre],
  templateUrl: './books-list.html',
  styleUrl: './books-list.css',
})
export class BooksList implements OnInit {
  genres: IGenre[] = [];
  booksGenre: Map<string, IBook[]> = new Map();

  ngOnInit(): void {
    this.booksGenre = new Map();

    books.forEach((book) => {
      const genreId = book.genre.id;
      if (!this.booksGenre.has(genreId)) {
        this.booksGenre.set(genreId, []);
      }
      this.booksGenre.get(genreId)?.push(book);
    });
    this.genres = [
      {
        id: 'romance',
        value: 'Romance',
        books: this.booksGenre.get('romance') ?? [],
      },
      {
        id: 'misterio',
        value: 'Mistério',
        books: this.booksGenre.get('misterio') ?? [],
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        books: this.booksGenre.get('fantasia') ?? [],
      },
      {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        books: this.booksGenre.get('ficcao-cientifica') ?? [],
      },
      {
        id: 'tecnicos',
        value: 'Técnicos',
        books: this.booksGenre.get('tecnicos') ?? [],
      },
    ];

    console.log(this.booksGenre);
  }
}
