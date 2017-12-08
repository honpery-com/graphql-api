import { UserId } from './user';
export type ObjectId = string;

export type Time = string;

export interface CommonQuery {
    limit?: number;
    skip?: number;
}
