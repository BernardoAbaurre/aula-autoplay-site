import { HttpContext, HttpContextToken } from '@angular/common/http';

export const REQUEST_PARAMS = new HttpContextToken<any>(() => null);

export function withRequestParams(params: any): HttpContext {
  return new HttpContext().set(REQUEST_PARAMS, params);
}
