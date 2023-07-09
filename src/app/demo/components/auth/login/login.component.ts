import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    :host ::ng-deep .p-password input {
        width: 100%;
        padding: 1rem;
    }

    :host ::ng-deep .pi-eye {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
    }

    :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
    }
  `]
})
export class LoginComponent {

  valCheck: string[] = ['remember'];
  customerID!: string;
  password!: string;

  constructor(
    public layoutService: LayoutService,
    private router: Router
  ) { }

  login() {
    const hardcodedCustomerID = '35989249';
    const hardcodedPIN = '35989249';

    // Perform authentication logic
    if (this.customerID === hardcodedCustomerID && this.password === hardcodedPIN) {
      // Authentication successful
      this.router.navigate(['/balance']);
    } else {
      // Authentication failed
      alert('Invalid credentials. Please try again.');
    }
  }
}
