export interface ILoginParams {
  name: string;
}

export interface IUser {
  name: string;
  avatar: string;
}

export interface IMessage {
  avatar: string;
  name: string;
  content: string;
  time: string;
  me: boolean;
  type: string;
  sys: boolean;
  new: number;
}
