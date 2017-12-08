import { ObjectId, Time } from './common';

export type UserId = ObjectId;

export type UserStatus = 'active' | 'delete';

export interface User {
    _id?: UserId;
    name?: string;
    username?: string;
    password?: string;
    site?: string;
    status?: UserStatus;
    create_at?: Time;
    update_at?: Time;
}
