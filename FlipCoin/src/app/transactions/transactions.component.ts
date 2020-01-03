import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class Transactions implements OnInit {
  transactionId: number;
  userId: number
  accountNumber: number;
  amount: number;
  type: string;
  transactionDate: Date;

  constructor() { }

  ngOnInit() {
  }

  getAccountNumber() {
    return this.accountNumber;
  }

}
