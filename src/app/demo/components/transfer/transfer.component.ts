import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './transfer.component.html',
})
export class TransferComponent {
  transferAmount?: number;
  selectedDebitAccount?: any;
  selectedCreditAccount?: any;

  accountOptions: any[] = [
    { name: 'Account 1', value: 'account1' },
    { name: 'Account 2', value: 'account2' },
    { name: 'Account 3', value: 'account3' }
  ];

  constructor(private http: HttpClient) {}

  transferFunds() {
    const transferData = {
      amount: this.transferAmount,
      debitAccount: this.selectedDebitAccount,
      creditAccount: this.selectedCreditAccount
    };

    this.http.post('/api/transfer', transferData).subscribe(
      (response) => {
        console.log('Funds transfer successful:', response);
        // Perform any additional actions or show success message to the user
      },
      (error) => {
        console.error('Funds transfer error:', error);
        // Handle error scenario, show error message to the user, etc.
      }
    );
  }
}
