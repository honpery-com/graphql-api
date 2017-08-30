import { ObjectId, TimeLine } from './common';

export type CategoryId = ObjectId;

export type CategoryStatus = 'active' | 'delete';

export interface Category {
    _id?: CategoryId;
    name?: string;
    desc?: string;
    timeline?: Array<TimeLine<CategoryStatus>>;
}
