import { User, UserId } from '../types';
import { BaseAPI } from './common';

export class UserAPI extends BaseAPI<User> {

    public static list(conditions: any) {
        return this.http.list({
            api: this.apis.core.user,
            query: conditions,
        });
    }

    public static detail(_id: UserId) {
        return this.http.detail({
            api: this.apis.core.user,
            params: [_id],
        });
    }

    public static create(new_user: User) {
        return this.http.create({
            api: this.apis.core.user,
            body: new_user,
        });
    }

    public static update(_id: UserId, new_user: User) {
        return this.http.update({
            api: this.apis.core.user,
            params: [_id],
            body: new_user,
        });
    }

    public static delete(_id: UserId) {
        return this.http.delete({
            api: this.apis.core.user,
            params: [_id],
        });
    }

}
