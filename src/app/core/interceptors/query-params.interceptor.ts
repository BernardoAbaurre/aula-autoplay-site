import { HttpInterceptorFn, HttpParams } from '@angular/common/http';
import { REQUEST_PARAMS } from '../tokens/http-context.token';

export const queryParamsInterceptor: HttpInterceptorFn = (req, next) => {
  // Verifica se a requisição tem um contexto com objeto de request
  const requestObject = req.context.get(REQUEST_PARAMS);

  if (requestObject) {
    const params = convertObjectToHttpParams(requestObject);
    const modifiedReq = req.clone({ params });
    return next(modifiedReq);
  }

  return next(req);
};

function convertObjectToHttpParams(obj: any): HttpParams {
  let params = new HttpParams();

  Object.keys(obj).forEach(key => {
    const value = obj[key];

    // Ignorar valores undefined ou null
    if (value === undefined || value === null) {
      return;
    }

    // Converter Date para ISO string
    if (value instanceof Date) {
      params = params.append(key, value.toISOString());
    }
    // Converter arrays
    else if (Array.isArray(value)) {
      value.forEach(item => {
        params = params.append(key, item.toString());
      });
    }
    // Converter outros valores para string
    else {
      params = params.append(key, value.toString());
    }
  });

  return params;
}
