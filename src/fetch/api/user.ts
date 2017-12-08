import { BaseAPI } from './_base';
import { CommonQuery, User, UserId } from './_types';

export class UserAPI extends BaseAPI {

    static list(conditions: User & CommonQuery) {
        return this.http.get<User>({
            api: this.apis.core.user,
            query: conditions,
        });
    }

    static detail(_id: UserId) {
        return this.http.get<User>({
            api: this.apis.core.user,
            params: [_id],
        });
    }

    static create(new_user: User) {
        return this.http.post<User>({
            api: this.apis.core.user,
            body: new_user,
        });
    }

    static update(_id: UserId, new_user: User) {
        return this.http.put<User>({
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
