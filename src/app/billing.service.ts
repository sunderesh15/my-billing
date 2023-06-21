import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemData } from './billingdashboard/billing/billing.component';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor(private http: HttpClient) { }


  getItems(): Observable<any> {

    const item_url = "http://localhost:8080/item";
    return this.http.get<ItemData[]>(item_url).pipe(catchError(this.errorHandler));
  }



  errorHandler(error: HttpErrorResponse) {

    return throwError(error);
  }

}
