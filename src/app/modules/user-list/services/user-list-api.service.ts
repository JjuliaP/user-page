import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MockHeader } from '../../../interceptors/mock.interceptor';

@Injectable()
export class UserListApiService {
  constructor(private http: HttpClient) {}

  public sendRequest(body: FormData): Observable<object> {
    return this.http.post('https://url.com', body, {
      headers: new HttpHeaders({
        [MockHeader]: '',
      }),
    });
  }
}
