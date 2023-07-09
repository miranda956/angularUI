import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  balance!: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchBalance();
  }

  fetchBalance(): void {
    // Make an HTTP GET request to your API endpoint
    this.http.get<number>('your-api-endpoint').subscribe(
      (response) => {
        this.balance = response;
      },
      (error) => {
        console.error('Error fetching balance:', error);
      }
    );
  }
}
