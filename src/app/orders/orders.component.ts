import { Component, OnInit } from "@angular/core";
import { DataService } from "../core/data.service";
import { ActivatedRoute } from "@angular/router";
import { ICustomer, IOrder } from "../shared/interfaces";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html"
})
export class OrdersComponent implements OnInit {
  customer: ICustomer;
  orders: IOrder[] = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get("id");
    this.dataService
      .getCustomer(id)
      .subscribe(customer => (this.customer = customer));
    this.dataService
      .getOrderForCustomer(id)
      .subscribe(orders => (this.orders = orders));
  }
}
