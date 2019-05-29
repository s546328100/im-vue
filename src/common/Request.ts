import { ajax, AjaxRequest, AjaxResponse, AjaxError } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { IResponse } from '../contracts/IResponse';
import { of } from 'rxjs';

const baseUrl = 'http://127.0.0.1:8081/api/';

interface IAjaxResponse<O> extends AjaxResponse {
  response: IResponse<O>;
}
interface IAjaxRequest extends AjaxRequest {
  url: string;
  resultArray?: boolean;
}
const unPack = <O>(data: IAjaxResponse<O>) => data.response.data;
const ANY: any = new Proxy(
  {},
  {
    get(target) {
      return 0;
    },
  },
);
export const createRequest = <I, O>(options: IAjaxRequest) => {
  return (p?: I) => {
    const body = { ...(options.body || {}), ...(p || {}) };
    const token = sessionStorage.getItem('token');
    return (ajax({
      ...options,
      body,
      url: `${baseUrl}${
        options.method === 'get' ? options.url + queryString(p) : options.url
      }`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }) as Observable<IAjaxResponse<O>>).pipe(
      map(unPack),
      catchError((e: AjaxError, c: Observable<O>) => {
        if (
          options.url !== 'auth/token' &&
          (e.status === 401 || e.status === 403)
        ) {
          location.href = '/login?redirectUrl=' + location.pathname;
        }
        return of(options.resultArray ? [ANY] : ANY) as Observable<O>;
      }),
    );
  };
};

function queryString(JSON: any) {
  let temp = [];
  for (let k in JSON) {
    if (JSON[k]) {
      temp.push(k + '=' + encodeURIComponent(JSON[k]));
    }
  }
  return (temp.length ? '?' : '') + temp.join('&');
}
