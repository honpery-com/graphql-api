import { ApiConfig } from 'xhttp-js';

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

export const SERVERs = [
    {
        local: 'http://localhost:9000',
        test: 'http://localhost:9000',
        production: 'http://localhost:9000',
        apis: [
            APIs.core,
            APIs.auth,
        ],
    },
];
