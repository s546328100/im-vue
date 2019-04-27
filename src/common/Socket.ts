import io from 'socket.io-client';

class Socket {
  public static getInstance(
    url?: string | ((err: boolean, socket: Socket) => void),
    fn?: (err: boolean, socket: Socket) => void,
  ): void {
    let [arg1, arg2] = arguments;
    if (!arg2) {
      arg2 = arg1;
    } else {
      this.instance = new Socket(arg1);
    }
    arg2.call(this, !this.instance, this.instance);
  }

  private static instance: Socket;

  private socket: SocketIOClient.Socket;

  constructor(url: string) {
    this.socket = io(url);

    this.socket.on('connect', () => {
      console.log(123);
    });

    this.socket.on('disconnect', () => {
      console.log(456);
    });
  }

  public on(event: string, fn: any) {
    this.socket.on(event, fn);
  }

  public emit(event: string, ...args: any[]) {
    this.socket.emit(event, args);
  }
}

export default (
  url?: string | ((err: boolean, socket: Socket) => void),
  fn?: (err: boolean, socket: Socket) => void,
) => Socket.getInstance(url, fn);
