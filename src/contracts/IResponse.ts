import { IPagination } from './IPagination';

export interface IResponseError {
  code: number;
  message: string;
  detail?: string;
}

export interface IResponse<T = any> {
  data: T;
  error?: IResponseError;
  pagination?: IPagination;
}
