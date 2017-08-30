export type API = string;

export type Param = any;

export type Params = Param[];

export interface Query {
    [name: string]: any;
}

export interface Body {
    [name: string]: any;
}

export interface Headers {
    [name: string]: any;
}
