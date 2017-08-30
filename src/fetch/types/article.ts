import { CategoryId } from './category';
import { ObjectId, TimeLine } from './common';
import { TagId } from './tag';
import { UserId } from './user';

export type ArticleId = ObjectId;

export type ArticleStatus = 'publish' | 'draft' | 'delete';

export interface Article {
    _id?: ArticleId;
    title?: string;                                // 标题
    desc?: string;                                 // 描述
    body?: string;                                 // 正文
    category?: CategoryId;                         // 分类
    tags?: TagId[];                                // 标签
    author?: UserId;                               // 作者
    timeline?: Array<TimeLine<ArticleStatus>>;     // 时间轴
}
