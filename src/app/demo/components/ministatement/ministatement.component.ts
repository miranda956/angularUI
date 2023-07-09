import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ministatement',
  templateUrl: './ministatement.component.html',
  styleUrls: ['./ministatement.component.scss']
})
export class MinistatementComponent implements OnInit {
  transactionList: any[] = [];
  loading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loading = true;
    this.http.get<any>('https://api.example.com/ministatement') // Replace with your API endpoint
      .subscribe(
        response => {
          this.transactionList = response.transactions.map((transaction: any) => ({
            transactionId: transaction.transactionId,
            date: transaction.date,
            amount: transaction.amount,
            type: transaction.type,
            balance: transaction.balance
          }));
          this.loading = false;
        },
        error => {
          console.error('Error fetching transaction data:', error);
          this.loading = false;
        }
      );
  }

  onGlobalFilter(event: Event) {
    // Implement your global filter logic here
  }

  clear(table: any) {
    // Implement the clear filter logic here
    table.clear();
  }
}
