import { ObjectId, Time } from './common';

export type CategoryId = ObjectId;

export type CategoryStatus = 'active' | 'delete';

export interface Category {
    _id?: CategoryId;
    name?: string;
    desc?: string;
    status?: CategoryStatus;
    create_at?: Time;
    update_at?: Time;
}
