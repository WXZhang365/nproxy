"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net = require("net");
exports.default = () => {
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
    server.listen({
        port: 7500,
        host: '127.0.0.1',
    }, function () {
        console.log('server start listening');
    });
    server.on('listening', function () {
        const adr = server.address();
        if (typeof adr == 'string') {
            console.log(`server is run ${adr}`);
        }
        else {
            const { address, port } = adr;
            console.log('server is running: ' + address + ':' + port);
        }
    });
    server.on('close', function () {
        console.log('sever closed');
    });
    server.on('error', function () {
        console.log('sever error');
    });
    return server;
};
class Proxy {
    _Server;
    constructor(config) {
        const port = config.port || 7500, host = config.host || '127.0.0.1';
        this._Server;
    }
}
//# sourceMappingURL=index.js.map