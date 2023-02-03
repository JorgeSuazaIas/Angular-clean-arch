import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user.service',
  templateUrl: './user.service.component.html',
  styleUrls: ['./user.service.component.scss']
})
export class User.ServiceComponent implements OnInit {

  constructor(private http: HttpClient) {
    super()
   }

  ngOnInit(): void {
  }

}
