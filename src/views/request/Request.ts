import { createRequest } from '@/common/Request';
import { ILoginParams, IUser } from '@/contracts/ICommon';

export const userLogin = createRequest<
  ILoginParams,
  { token: string }
>({
  url: 'user/login',
  method: 'post',
});

export const getUser = createRequest<
  ILoginParams,
  IUser
>({
  url: 'user',
  method: 'get',
});
