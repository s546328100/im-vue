import io from 'socket.io-client';

class Socket {
  public static getInstance(url: string): Socket {
    this.instance = this.instance || new Socket(url);
    return this.instance;
  }

  private static instance: Socket;

  private socket: SocketIOClient.Socket;

  constructor(url: string) {
    console.log('000');
    this.socket = io(url);

    this.socket.on('connect', () => {
      console.log(123);
    });

    this.socket.on('disconnect', () => {
      console.log(456);
    });
  }

  public on(event: string, fn: any) {
    this.socket.once(event, fn);
  }

  public emit(event: string, ...args: any[]) {
    this.socket.emit(event, args);
  }
}

export default (url: string) => Socket.getInstance(url);
