import { Query } from 'happy-graphql';
import { ArticleAPI } from '../../fetch';
import { Article } from './types';

export const ArticlesQuery = Query('articles', {
    desc: '文章列表',
    type: Article,
    args: {},
    async resolver(args) {
        const { result } = await ArticleAPI.list(args);
    },
});
