import { UserId } from './user';
export type ObjectId = string;

export type Time = string;

export interface TimeLine<T> {
    status?: T;
    time?: Time;
    desc?: string;
    author?: UserId;
}
