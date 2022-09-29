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
export declare const sConfig: () => IServerConfig;
export declare const cConfig: () => IClientConfig;
