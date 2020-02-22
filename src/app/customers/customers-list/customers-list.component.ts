import {Component, Input, OnInit} from "@angular/core";
import {ICustomer} from "../../shared/interfaces";
import {SorterService} from "../../core/sorter.service";

@Component({
  selector: "app-customers-list",
  templateUrl: "./customers-list.component.html"
})
export class CustomersListComponent implements OnInit {
  filteredCustomers: ICustomer[] = [];
  customerTotal: number;
  currencyCode: string = "GBP";
  _customer: ICustomer[] = [];

  constructor(private sorterService: SorterService) {}

  @Input() get customers(): ICustomer[] {
    return this._customer;
  }

  set customers(value: ICustomer[]) {
    if (value) {
      this._customer = this.filteredCustomers = value;
      this.calculateOrders();
    }
  }

  ngOnInit() {
  }

  calculateOrders() {
    this.customerTotal = 0;
    this.filteredCustomers.forEach((customer: ICustomer) => {
      this.customerTotal += customer.orderTotal;
    });
  }

  filter(text: string) {
    if (text) {
      this.filteredCustomers = this.customers.filter((customer: ICustomer) => {
        let search = text.toLowerCase();
        return customer.name.toLowerCase().indexOf(search) > -1 ||
          customer.city.toLowerCase().indexOf(search) > -1 ||
          customer.orderTotal.toString().indexOf(search) > -1
      });
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }

  sort(prop: string) {
    this.sorterService.sort(this.filteredCustomers, prop)
  }
}
