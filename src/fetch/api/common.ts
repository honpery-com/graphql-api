import { isDev } from '../../helper';
import { Http } from '../common';
import { APIs, Env } from '../config';

export class BaseAPI {

    protected static http = new Http({
        env: process.env.SERVER as Env,
        debug: isDev,
    });

    protected static apis = APIs;

}
