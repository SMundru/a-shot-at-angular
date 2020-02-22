import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-filter-box",
  template: `
    Filter: <input type="text" [(ngModel)]="filter"/>
  `
})
export class FilterTextBoxComponent implements OnInit {
  @Output() changed: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  private _filter: string;

  @Input() get filter() {
    return this._filter;
  }

  set filter(value: string) {
      this._filter = value;
      this.changed.emit(this.filter);
  }

  ngOnInit(): void {}
}
