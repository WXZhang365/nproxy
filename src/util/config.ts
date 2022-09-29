import * as fs from 'node:fs';
import { resolve } from 'node:path';

export interface IServerConfig {
  domain: string;
  public_port: string;
  listen_port: string;
  multiprocess: 'true' | 'false';
}

export interface IClientConfig {
  remote_ip: string;
  clientName: string;
}

function Read<T>(file: Buffer): T {
  const str = file.toString('utf-8');
  const obj = {};
  str.split('\n').forEach((item) => {
    const [key, value] = [[item.split('=')[0]], item.split('=')[1]];
    obj[`${key}`] = value;
  });
  return obj as T;
}
const dirname = resolve(__dirname, '..');
export const sConfig = () => {
  return Read<IServerConfig>(fs.readFileSync(resolve(dirname, '../s.ini')));
};
export const cConfig = () => {
  return Read<IClientConfig>(fs.readFileSync(resolve(dirname, '../c.ini')));
};
