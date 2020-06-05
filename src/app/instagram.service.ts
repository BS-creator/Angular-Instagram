import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { InstagramPost } from './instagram-post';

@Injectable({
  providedIn: 'root',
})
export class InstagramService {
  private appId = '';
  private appSecret = '';
  private redirectUrl = '';
  private getCode = '';
  private apiBaseUrl = 'https://api.instagram.com/';
  private graphBaseUrl = 'https://graph.instagram.com/';
  private userAccessToken =
    'IGQVJXbTNOdEZARRV9Bai04QTVsZATM0ZAXlhcFBsaHhTc2ZAKOUszU1RxeUZANaC1CdG5iMzVpYk1HY1Y1aEQ2SWFsOVBiczZANT1MzOVJGT2ZAKYWo2RGNHbmhQRWt1QmZAVUzFQQWNFcVZAKTDJMOGJnZA0tRUAZDZD';
  private userAccessTokenExpires = '';

  public authorizationUrl = '';
  public hasUserAccessToken = false;
  public userId = '';

  constructor(private httpClient: HttpClient) {}

  getPosts(): any {
    // var url =
    //   'https://api.instagram.com/v1/users/self/?access_token=' +
    //   this.userAccessToken;
    // var a = {
    //   a: 'a',
    //   b: 'b',
    // };
    // return new Observable((observer) => {
    //   observer.next(45);
    // });
    var username = 'coolmind2028';
    var url = 'https://www.instagram.com/' + username + '?__a=1';

    return this.httpClient.get<any>(url).pipe(catchError(this.errorHandler));
  }

  // getUser():any {
  //   var params = {
  //     'endpoint_url' : this.graphBaseUrl + 'me',
  //     'type' : 'GET',
  //     'url_params' :{
  //       'fields' : 'id,username,media_count,account_type',
  //     }
  //   }

  //   var response = this.makeApiCall($params);
  //   return response;
  // }
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
