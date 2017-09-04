import { ObjectId, TimeLine } from './common';

export type UserId = ObjectId;

export type UserStatus = 'active' | 'delete';

export interface User {
    _id?: UserId;
    name?: string;
    username?: string;
    password?: string;
    site?: string;
    timeline?: Array<TimeLine<UserStatus>>;
}
