import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class GetDemographicDataService {
  constructor(private http: HttpClient) {}

  endpoint = "https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient/4342008";
  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json+fhir',
      Authorization: '<OAuth2 Bearer Token>'
    })
  };

  getData(): Observable<any> {
    return this.http.get(this.endpoint,this.httpOptions).pipe(map(this.extractData));
  }
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  private handleError<T>(operation, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
