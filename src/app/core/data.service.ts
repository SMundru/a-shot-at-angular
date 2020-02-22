import { Injectable } from "@angular/core";
import { ICustomer, IOrder } from "../shared/interfaces";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable()
export class DataService {
  private baseUrl: string = "assets/";

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<ICustomer[]> {
    return this.http
      .get<ICustomer[]>(this.baseUrl + "customers.json")
      .pipe(catchError(DataService.handleError));
  }

  getCustomer(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer[]>(this.baseUrl + "/customers.json").pipe(
      map(customers => {
        let customer = customers.filter(
          (customer: ICustomer) => customer.id == id
        );
        return customer && customer.length ? customer[0] : null;
      }),
      catchError(DataService.handleError)
    );
  }

  getOrders(): Observable<IOrder[]> {
    return this.http
      .get<IOrder[]>(this.baseUrl + "/orders.json")
      .pipe(catchError(DataService.handleError));
  }

  getOrderForCustomer(customerId: number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.baseUrl + "/orders.json").pipe(
      map(orders => {
        return orders.filter(order => (order.customerId == customerId));
      }),
      catchError(DataService.handleError)
    );
  }

  private static handleError(error: any) {
    console.error("server error:", error);
    if (error.error instanceof Error) {
      return throwError(error.text);
    }
    return throwError(error || "Node.js server error");
  }
}
