import fetch from 'node-fetch';
import { Env } from '../config';
import { ApiConfig } from '../config';
import { Body, Headers, Params, Query } from './types';
import { Url } from './url';

interface FetchOptions {
    api: ApiConfig;
    params?: Params;
    query?: Query;
    body?: Body;
    headers?: Headers;
}

interface HttpOptions {
    env: Env;
    debug?: boolean;
}

export type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export class Http {

    private _options: HttpOptions;

    constructor(options: HttpOptions) {
        this._options = options;
    }

    list<T>(options: FetchOptions) {
        return this.buildMethod<T>('GET', options);
    }

    detail<T>(options: FetchOptions) {
        return this.buildMethod<T>('GET', options);
    }

    create<T>(options: FetchOptions) {
        return this.buildMethod<T>('POST', options);
    }

    update<T>(options: FetchOptions) {
        return this.buildMethod<T>('PATCH', options);
    }

    delete<T>(options: FetchOptions) {
        return this.buildMethod<T>('DELETE', options);
    }

    private buildMethod<T>(method: Method, options: FetchOptions) {
        const { api, params, query, body, headers } = options;
    }
}
