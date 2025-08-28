import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  book = {
    titulo: 'As ondas',
    autoria: 'Virginia Woolf',
    image: 'https://m.media-amazon.com/images/I/81D2d6LqZdS._UF1000,1000_QL80_.jpg',
    favorite: false,
  };

  alterarFavorito() {
    this.book.favorite = !this.book.favorite
  }
}
