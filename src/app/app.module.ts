import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomersModule } from "./customers/customers.module";
import { SharedModule } from "./shared/shared.module";
import { FormsModule } from "@angular/forms";
import {CoreModule} from "./core/core.module";
import {OrdersModule} from "./orders/orders.module";
import {OrdersRoutingModule} from "./orders/orders-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CustomersModule,
    OrdersModule,
    SharedModule,
    FormsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
