import { User } from '../types';
import { BaseAPI } from './common';

export interface NewUser {
    username: string;
    password: string;
    site: string;
}

export class AuthAPI extends BaseAPI {
    static login(username: string, password: string) {
        return this.http.create<User>({
            api: this.apis.auth.login,
            body: { username, password },
        });
    }

    static register(newUser: NewUser) {
        return this.http.create<User>({
            api: this.apis.auth.register,
            body: newUser,
        });
    }
}
