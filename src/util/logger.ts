export interface ILoggerConfig {
  LogPath: string;
  LogLevel: string;
}
export class Logger {
  constructor(config) {}
  Info(arg: ILoggerConfig) {
    console.log(arg);
  }
}

export default () => {};
