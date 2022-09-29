export interface ILoggerConfig {
    LogPath: string;
    LogLevel: string;
}
export declare class Logger {
    constructor(config: any);
    Info(arg: ILoggerConfig): void;
}
declare const _default: () => void;
export default _default;
