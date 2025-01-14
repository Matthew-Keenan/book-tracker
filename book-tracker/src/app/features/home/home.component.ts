import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  hello = 'Did not reach api hello service';
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
