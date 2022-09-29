// import * as net from 'node:net';

// class Socket {
//   static con = new Socket().getSock();
//   private _sock: net.Socket;
//   public getSock() {
//     return this._sock;
//   }
// }

// let sock = Socket.con;

// // 连接成功
// sock.on('connect', function () {
//   console.log('connect success');
//   // 向服务端发送数据
//   sock.write('测试数据', 'utf8');
// });

// // 接收来自服务端的信息
// sock.on('data', function (data) {
//   console.log('接收到来自服务端的信息：', data.toString('utf-8'));
// });

// // 有错误发生调用的事件
// sock.on('error', function (e) {
//   sock = createSocketConnection();
//   console.log('socket error', e);
// });

// // socket关闭的事件
// sock.on('close', function () {
//   console.log('socket close');
// });

// // 对方发送了关闭数据包过来的事件
// sock.on('end', function () {
//   console.log('socket end');
// });
