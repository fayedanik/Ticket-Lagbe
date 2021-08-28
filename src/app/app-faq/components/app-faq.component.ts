import { Component, OnInit } from '@angular/core';
import { FAQ } from '../interfaces/faq.interface';

@Component({
  selector: 'app-faq',
  templateUrl: './app-faq.component.html',
  styleUrls: ['./app-faq.component.scss']
})
export class AppFaqComponent implements OnInit {

  secA:FAQ[] = [];
  secB:FAQ[] = [];
  secC:FAQ[] = [];
  constructor() { }
  ngOnInit(): void {
    this.getSecA();
    this.getSecB();
    this.getSecC();
  }

  getSecA() {
    this.secA = [
      {
        "question":"How can i cancel my bus ticket?",
        "answer":"You can cancel your bus tickets on VOWBUS website or mobile App from My journeys section. Select the ticket you wish to cancel and you will see a Cancel button at the bottom of the ticket. Click on it to select seats for cancellation and view cancellation charges applicable. You can then acknowledge it to proceed with Cancellation. Depending on the operator there are seperate cancellation policy and you may not be allowed to cancel ticket before certain hours from Departure time. To know more on operator specific cancellation time limits and charges, click here Ticket cancellation policy."
      },
      {
        "question":"How do I print/download my e-ticket?",
        "answer":"You can print your ticket from the website - `View Ticket` menu option. Enter your TR / PNR number and your mobile number provided during booking. You can print the ticket or download as PDF"
      },
      {
        "question":"Do I need an ID proof while booking ticket?",
        "answer":"A government provided ID proof is required to board the bus. However you need not enter the details during booking."
      },
      {
        "question":"Can I change my ticket details?",
        "answer":"No. There is no option available for changing ticket details."
      }
    ]
  }
  getSecB() {
    this.secB = [
      {
        "question":"How do I pay",
        "answer":"You can pay using multiple options like debit card, credit card, wallets, net-banking and even UPI."
      },
      {
        "question":"Payment deducted but booking not done?",
        "answer":"Sometimes due to network issues on the bank side we dont receive the payment information and so is the reason the booking fails. During such scenario our executives will immediately contact customer to either confirm the ticket for the same amount or initiate a refund in case customer need not like to proceed with booking."
      },
      {
        "question":"Are there any hidden charges (Service Charge or Tax)",
        "answer":"Unlike other online bus booking sites we do not have any hidden charges like Service charge, payment gateway charge etc."
      }
    ]
  }
  getSecC() {
    this.secC = [
      {
        "question":"How will I get my refund?",
        "answer":"In respect of tickets canceled by the passenger or bus cancelled by the operator, we will refund the amount applicable to the respective Credit card / Debit Card / Online banking account / Wallet / UPI linked account that was used for booking the ticket. Refunds are initiated automatically as soon as you cancel your ticket from the App. It might take 8-10 Bank Working Days to get the amount credited to your account."
      },
      {
        "question":"Refund ammount not yet credited to my account?",
        "answer":"Refund process is automatic and is initiated instantly. It typically takes about 8-10 bank working days for all credit card, debit card and netbanking transactions. Sometimes the refunds dont get credited to your account even after 10 days due to bank holidays and delay in processing your credit or refund process being interrupted by network error or systems error at the banks side. In such cases you need to contact your banks Charge Back / Dispute Resolution Team and raise a refund credit request mentioning the transaction ID you have received from your bank SMS/Email. You can check your banks website to get the customer support phone contact number."
      }
    ]
  }

}
