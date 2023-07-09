import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';


interface Registration {
  name: string;
  email: string;
  customerId: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationData: Registration = {
    name: '',
    email: '',
    customerId: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onRegister(): void {
    // Send the registration data to the API
    this.http.post('your-api-endpoint', this.registrationData)
      .subscribe(
        (response) => {
          // Registration successful, handle the response if needed
          console.log('Registration successful:', response);
        },
        (error) => {
          // Registration failed, handle the error if needed
          console.error('Registration failed:', error);
        }
      );
  }
}
