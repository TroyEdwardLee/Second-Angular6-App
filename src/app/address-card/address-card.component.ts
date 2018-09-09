import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  user: any;
  @Input('userName') userName: string;
  @Input('componentTitle') componentTitle: string;
  constructor() {
  }

  ngOnInit() {
    this.user = {
      name: this.userName,
      title: this.componentTitle,
      address: '1234 Main St, City, State, 10010',
      phone: [
        '123-123-1234',
        '456-456-4568'
      ]
    };
  }

}
