import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, NgTemplateOutlet, CommonModule],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  hello = 'Did not reach api hello service';
  books = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    console.log("Here")
      const url = 'http://localhost:3000/hello'
      this.http.get(url, { responseType: 'text'}).subscribe({
        next: (data) => this.hello = data,
        error: (error) => console.log(error)
    })
  }
}
