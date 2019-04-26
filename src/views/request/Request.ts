import { createRequest } from '@/common/Request';
import { ILoginParams } from '@/contracts/ICommon';

export const userLogin = createRequest<
  ILoginParams,
  { token: string }
>({
  url: 'user/login',
  method: 'post',
});
