import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./data.service";
import {SorterService} from "./sorter.service";

@NgModule({
  providers: [DataService, SorterService],
  imports: [HttpClientModule]
})
export class CoreModule{}


