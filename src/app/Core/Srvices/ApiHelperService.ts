import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
//import { LocaleService } from 'angular-l10n';
import { Observable, throwError } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable()
export class ApiHelperService {
  constructor(private http: HttpClient/*, public locale: LocaleService*/) {
  }


  protected getRequestHeaders(customHeader: HttpHeaders): HttpHeaders {
    if (!customHeader)
      customHeader = new HttpHeaders();

    let headers = customHeader.set("Content-Type", "application/json")
      .set("Accept", "application/json")

    return headers;
  }

  post<TData, TResponse>(uri: string, data: TData, options?: {}, headers?: HttpHeaders):Observable<TResponse> {
    var content: any = data;
    if (this.isNullOrUndefined(options)) {
      options = {
        headers: this.getRequestHeaders(headers)
      };
      content = JSON.stringify(data)
    }

    return this.http.post(uri, content, options).pipe(
      map((res: TResponse) => { return res; }),
      catchError((error: any) => { return this.handleError(error); }),
      finalize(() => { this.handleFinally(); }));
  }
  isNullOrUndefined(value) {
    return value === null || value === undefined;
  }
  private handleError(httpErrorResponse: HttpErrorResponse) {
    return throwError(httpErrorResponse);
  }
  private handleFinally() {
  }

  get<TResponse>(uri: string, params = new HttpParams(), headers?: HttpHeaders): Observable<TResponse> {
    var options = {
      params: params,
      headers: this.getRequestHeaders(headers)
    };

    return this.http.get(uri, options).pipe(
      map((res: TResponse) => { return res; }),
      catchError((error: any) => { return this.handleError(error); }),
      finalize(() => { this.handleFinally(); }));
  }


  delete<TResponse>(uri: string, params = new HttpParams(), headers?: HttpHeaders): Observable<TResponse> {
    var options = {
      params: params,
      headers: this.getRequestHeaders(headers)
    };

    return this.http.delete(uri, options).pipe(
      map((res: TResponse) => { return res; }),
      catchError((error: any) => { return this.handleError(error); }),
      finalize(() => { this.handleFinally(); }));
  }

  put<TData, TResponse>(uri: string, data: TData, params = new HttpParams(), headers?: HttpHeaders): Observable<TResponse> {
    var options = {
      params: params,
      headers: this.getRequestHeaders(headers)
    };

    return this.http.put(uri, JSON.stringify(data), options).pipe(
      map((res: TResponse) => { return res; }),
      catchError((error: any) => { return this.handleError(error); }),
      finalize(() => { this.handleFinally(); }));
  }


}


