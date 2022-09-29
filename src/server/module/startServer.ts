import * as net from 'net';
import { IServerConfig } from 'src/util/config';
export function startServer(config: IServerConfig) {
  const server = net.createServer(function (client) {
    console.log('someones connects');
    client.on('data', function (data) {
      setTimeout(() => {
        client.write('服务端发送通知');
      }, 3000);
      console.log('服务端接收到来自客户端的数据:', data.toString('utf-8'));
    });
    client.on('close', function (err) {
      console.log('客户端下线');
    });
    client.on('error', function (err) {
      console.log('客户端连接错误');
    });
  });
  server.listen(
    {
      port: 7500,
      host: '127.0.0.1',
    },
    function () {
      console.log('server start listening');
    },
  );
}
