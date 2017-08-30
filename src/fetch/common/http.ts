import { Env } from '../config';
import { API, Body, Headers, Params, Query } from './types';
import { Url } from './url';

interface FetchOptions {
    api: API;
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

export class Http<T> {

    private _options: HttpOptions;

    constructor(options: HttpOptions) {
        this._options = options;
    }

    public list(options: FetchOptions) {
        return this.buildMethod({ ...options, method: 'GET' });
    }

    public detail(options: FetchOptions) {
        return this.buildMethod({ ...options, method: 'GET' });
    }

    public create(options: FetchOptions) {
        return this.buildMethod({ ...options, method: 'POST' });
    }

    public update(options: FetchOptions) {
        return this.buildMethod({ ...options, method: 'PATCH' });
    }

    public delete(options: FetchOptions) {
        return this.buildMethod({ ...options, method: 'DELETE' });
    }

    private buildMethod(options: FetchOptions & { method: Method }) {
        const { method, api, params, query, body, headers } = options;
    }
}
