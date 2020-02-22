import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  name: string;
  title = "my-deam-app";

  ngOnInit(): void {
    this.name = "Hello World";
  }
}
