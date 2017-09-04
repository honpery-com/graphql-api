import { Query, scalars } from 'happy-graphql';
import { CategoryAPI } from '../../fetch';
import { Category } from './types';

export const CategoriesQuery = Query('categories', {
    desc: '分类列表',
    type: Category,
    async resolver() {
        const result = await CategoryAPI.list({});
        return result;
    },
});

export const CategoryQuery = Query('category', {
    desc: '分类详情',
    type: Category,
    args: {
        id: [scalars.id, '分类id'],
    },
    async resolver({ id }) {
        const result = await CategoryAPI.detail(id);
        return result;
    },
});
