export declare let CurrentServiceMap: Map<string, Object>;
export declare function Mapping(alias?: string): (target: any) => void;
export declare const Sql: (sql: string) => (target: any, key: string, descriptor: PropertyDescriptor) => void;
export declare const load: (folder: string) => any;
