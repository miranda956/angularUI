import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {
  amount: number = 0;
  selectedAccount: any;
  description: string = '';

  accountOptions: any[] = [
    // Add your account options here
    { name: 'Account A', value: 'A' },
    { name: 'Account B', value: 'B' },
    { name: 'Account C', value: 'C' }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitDeposit(): void {
    // Make API call to submit the deposit
    const depositData = {
      amount: this.amount,
      account: this.selectedAccount,
      description: this.description
    };

    this.http.post('/api/deposit', depositData).subscribe(
      (response) => {
        // Handle success response
        console.log('Deposit successful');
        // Reset form fields
        this.amount = 0;
        this.selectedAccount = null;
        this.description = '';
      },
      (error) => {
        // Handle error response
        console.error('Deposit failed', error);
      }
    );
  }
}
