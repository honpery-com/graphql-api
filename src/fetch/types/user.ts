import { ObjectId, TimeLine } from './common';

export type UserId = ObjectId;

export type UserStatus = 'active' | 'delete';

export interface User {
    _id?: UserId;
    timeline?: Array<TimeLine<UserStatus>>;
}
