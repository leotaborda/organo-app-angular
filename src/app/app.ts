import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
//import { Book } from "./components/book/book";
import { BooksList } from "./components/books-list/books-list";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, BooksList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('organo');
}
