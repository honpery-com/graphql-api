import { ObjectId, Time } from './common';

export type TagId = ObjectId;

export type TagStatus = 'active' | 'delete';

export interface Tag {
    _id?: TagId;
    name?: string;
    desc?: string;
    status?: TagStatus;
    create_at?: Time;
    update_at?: Time;
}
