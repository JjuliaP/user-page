import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { of } from 'rxjs';

export const MockHeader = 'Mock-Header';

export const MockInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  if (req.headers.has(MockHeader)) {
    return of(
      new HttpResponse({
        status: 200,
        body: req.body,
      })
    );
  }

  return next(req);
};
