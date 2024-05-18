import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, throwError } from 'rxjs';
import { tap } from 'rxjs';
import { companyDetails } from '../interfaces/interfaceCompany';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {
  private _url: string = 'https://664867b02bb946cf2fa07190.mockapi.io/companydetails';
  constructor(private _http : HttpClient ) { }

  getCompanyDetails():Observable<companyDetails[]> {
    return this._http.get<companyDetails[]>(this._url)
 
    .pipe(
      tap(data => console.log('data/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }

  private handleError(err:HttpErrorResponse) {
    return throwError(() => new Error("mockapi service:" + err.message))
  }
}
