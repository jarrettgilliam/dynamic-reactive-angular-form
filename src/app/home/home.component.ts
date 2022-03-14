import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonFormData } from '../components/json-form/json-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public formData: JsonFormData | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      if (!this.formData) {
          return;
      }
      this.http
          .get<JsonFormData>('/assets/my-form.json')
          .subscribe(formData => {
              this.formData = formData;
          });
  }

}
