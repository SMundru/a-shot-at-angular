import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomersComponent } from "./customers.component";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { FilterTextBoxComponent } from "./customers-list/filter-text.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import {CustomersRoutingModule} from "./customers-routing.module";
import {OrdersModule} from "../orders/orders.module";

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterTextBoxComponent
  ],
  exports: [CustomersComponent],
  imports: [CommonModule, SharedModule, FormsModule, CustomersRoutingModule]
})
export class CustomersModule {}
