import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.html',
  styleUrl: './book.css'
})
export class Book {

  book = {
    titulo: "As ondas",
    autoria: "Virginia Woolf"
  }
}
