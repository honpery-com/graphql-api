import { Headers, Query } from '../common';

export type Env = 'local' | 'test' | 'production';

export interface ApiConfig {
    api: string;
    desc: string;
    headers?: Headers;
    query?: Query;
}

export interface ApiConfigGroup {
    [name: string]: ApiConfig;
}

export const APIs = {
    core: {
        article: {
            api: '/articles',
            desc: '文章',
        },
        tag: {
            api: '/tags',
            desc: '标签',
        },
        category: {
            api: '/categories',
            desc: '分类',
        },
        user: {
            api: '/users',
            desc: '用户',
        },
    },
    auth: {
        login: {
            api: '/auth/login',
            desc: '登录',
        },
        register: {
            api: '/auth/register',
            desc: '注册',
        },
    },
};

type ServerEnv = {
    [env in Env]: string;
};

interface ServerConfig extends ServerEnv {
    apis: ApiConfig[] | ApiConfigGroup[];
}

export const SERVERs: ServerConfig[] = [
    {
        local: 'http://localhost:9000',
        test: 'http://localhost:9000',
        production: 'httpL//localhost:9000',
        apis: [
            APIs.core,
            APIs.auth,
        ],
    },
];
