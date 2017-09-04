import { Query } from 'happy-graphql';
import { UserAPI } from '../../fetch';
import { User } from './types';

export const UsersQuery = Query('users', {
    desc: '用户列表',
    type: User,
    async resolver() {
        const { result } = await UserAPI.list({});
        return result;
    },
});

export const UserQuery = Query('user', {
    desc: '用户详情',
    type: User,
    async resolver() {
        const { result } = await UserAPI.detail();
        return result;
    },
});
