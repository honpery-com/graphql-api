import { ObjectId, TimeLine } from './common';

export type TagId = ObjectId;

export type TagStatus = 'active' | 'delete';

export interface Tag {
    _id?: TagId;
    name?: string;
    desc?: string;
    timeline?: Array<TimeLine<TagStatus>>;
}
