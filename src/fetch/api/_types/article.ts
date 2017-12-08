import { CategoryId } from './category';
import { ObjectId, Time } from './common';
import { TagId } from './tag';
import { UserId } from './user';

export type ArticleId = ObjectId;

export type ArticleStatus = 'publish' | 'draft' | 'delete';

export interface Article {
    _id?: ArticleId;
    title?: string;
    desc?: string;
    body?: string;
    category?: CategoryId;
    tags?: TagId[];
    author?: UserId;
    status?: ArticleStatus;
    create_at?: Time;
    update_at?: Time;
    publish_at?: Time;
}
