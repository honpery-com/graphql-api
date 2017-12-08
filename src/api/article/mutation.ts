import { Mutation, scalars } from 'happy-graphql';
import { Article } from './types';

export const CreateArticle = Mutation('createArticle', {
    desc: '添加文章',
    input: {
        title: [scalars.string, '标题'],
        body: [scalars.string, '正文'],
        desc: [scalars.string, '描述'],
    },
    output: Article,
    async resolver() {

    },
});
