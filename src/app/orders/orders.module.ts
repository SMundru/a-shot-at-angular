import {NgModule} from "@angular/core";
import {OrdersComponent} from "./orders.component";
import {OrdersRoutingModule} from "./orders-routing.module";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [OrdersComponent],
  imports: [CommonModule, FormsModule, SharedModule, OrdersRoutingModule ]})

export class OrdersModule {}
