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
  proxy_data = '';
  direct_data = '';
  constructor(private http: HttpClient) {
    this.getWithProxy();
    this.getWithDirect();
  }
  getWithProxy(){
    this.http.get(env.apiUrl + 'time', {responseType: 'text'}).subscribe(data => {
      this.proxy_data = data;
    });
  }
  getWithDirect(){
    this.http.get('https://djarviss.ru/rest/' + 'time', {responseType: 'text'}).subscribe(data => {
      this.direct_data = data;
    });
  }
}
