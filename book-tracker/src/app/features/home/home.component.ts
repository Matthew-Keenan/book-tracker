import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, NgTemplateOutlet, CommonModule],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  currentReads$: Book[] = [];
  toBeRead$: Book[] = [];
  books = [1, 2, 3, 4, 5, 6]
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    console.log("In the home component!");
    this.getCurrentReads();
    this.getToBeRead();
  }

  getCurrentReads() {
    const currentReadsUrl = 'http://localhost:3000/books/current-reads';
    this.http.get<Book[]>(currentReadsUrl).subscribe({
      next: (data: Book[]) => this.currentReads$ = data,
      error: (error) => console.log(error)
    });
  }

  getToBeRead() {
    const toBeReadUrl = 'http://localhost:3000/books/to-be-read';
    this.http.get<Book[]>(toBeReadUrl).subscribe({
      next: (data: Book[]) => this.toBeRead$ = data,
      error: (error) => console.log(error)
    });
  }

  getTrending(): Book[] {
    const trendingUrl = '';
    return [];
  }

  getNewAndNoteworthy(): Book[] {
    const getNewAndNoteworthyUrl = '';
    return [];
  }

  getRandomCover(): string {
    const covers = ['Mistborn_1_Cover.jpg', 'Mistborn_2_Cover.jpg', 'Mistborn_3_Cover.jpg', 
      'Mistborn_4_Cover.jpg', 'Mistborn_5_Cover.webp', 'Mistborn_6_Cover.webp', 'Mistborn_7_Cover.webp', 
      'Stormlight_1_Cover.jpg', 'Stormlight_2_Cover.jpg', 'Stormlight_3_Cover.jpg', 
      'Stormlight_4_Cover.jpg', 'Stormlight_5_Cover.jpg'];
    const randomNumber = Math.floor(Math.random() * covers.length);
    return covers[randomNumber];
  }

  getRandomTitle(): string {
    const titles = ['The Way of Kings', 'Words of Radiance', 'Oathbringer', 'Rhythm of War', 'Wind and Truth', 
      'The Final Empire', 'The Well of Ascension', 'The Hero of Ages', 'The Alloy of Law', 'Shadows of Self', 
      'The Bands of Mourning', 'The Lost Metal', 'Shadows for Silence in the Forests of Hell'
    ];
    const randomNumber = Math.floor(Math.random() * titles.length);
    return titles[randomNumber];
  }

  getRandomAuthor(): string {
    const authors = ['Brandon Sanderson', 'Joe Abercrombie', 'Rebecca Kuang', 'Robert Jordan', 'Fonda Lee', 'Robin Hobb', 'George RR Martin', 'James Islington', 'Pierce Brown', 'This is a Very Long Author Name Test']
    const randomNumber = Math.floor(Math.random() * authors.length);
    return authors[randomNumber];
  }
}
