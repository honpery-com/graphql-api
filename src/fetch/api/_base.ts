import { Http } from 'xhttp-js';
import { isDev } from '../../helper';
import { APIs, SERVERs } from '../config';

export class BaseAPI {

    protected static http = new Http({
        apis: APIs,
        servers: SERVERs,
        env: process.env.SERVER as Env,
    });

    protected static apis = APIs;

}
