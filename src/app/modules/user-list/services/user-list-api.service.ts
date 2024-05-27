import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserListApiService {
  constructor(private http: HttpClient) {}

  public sendRequest(body: FormData): Observable<object> {
    return this.http.post('url', body);
  }
}
