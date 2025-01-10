import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-proxy';
  constructor(private http: HttpClient) {
    this.http.get(env.apiUrl + 'time', {responseType: 'text'}).subscribe(data => {
      alert(data);
    });
  }
}
