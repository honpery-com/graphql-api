import { User, UserId } from '../types';
import { BaseAPI } from './common';

export class UserAPI extends BaseAPI {

    static list(conditions: any) {
        return this.http.list<User>({
            api: this.apis.core.user,
            query: conditions,
        });
    }

    static detail(_id: UserId) {
        return this.http.detail<User>({
            api: this.apis.core.user,
            params: [_id],
        });
    }

    static create(new_user: User) {
        return this.http.create<User>({
            api: this.apis.core.user,
            body: new_user,
        });
    }

    static update(_id: UserId, new_user: User) {
        return this.http.update<User>({
            api: this.apis.core.user,
            params: [_id],
            body: new_user,
        });
    }

    static delete(_id: UserId) {
        return this.http.delete<User>({
            api: this.apis.core.user,
            params: [_id],
        });
    }

}
