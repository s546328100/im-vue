import io from 'socket.io-client';

declare module 'vue/types/vue' {
  interface Vue {
    $socket: Socket;
  }
}

export class Socket {
  private socket: SocketIOClient.Socket | null = null;
  private url: string;
  private opts: SocketIOClient.ConnectOpts;

  constructor(url: string, opts: SocketIOClient.ConnectOpts = {}) {
    this.url = url;
    this.opts = opts;
  }

  public init(token: string, fn?: Function) {
    if (!this.socket || !this.socket.connected) {
      this.opts.query = { token };
      const socket = io(this.url, this.opts);

      socket.on('connect', () => {
        console.log('connect ' + socket.id);
      });

      socket.on('disconnect', () => {
        console.log('disconnect!!!');
        fn && fn();
      });

      this.socket = socket;

      console.log('init socket is success!!');
    }
  }

  public on(event: string, fn: any) {
    if (this.socket) {
      this.socket.on(event, fn);
    }
  }

  public emit(event: string, ...args: any[]) {
    if (this.socket) {
      this.socket.emit(event, args);
    }
  }
}
