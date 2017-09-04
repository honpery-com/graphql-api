import { Mutation, scalars } from 'happy-graphql';
import { UserAPI } from '../../fetch';
import { User } from './types';

export const CreateUserMutation = Mutation('createUser', {
    desc: '创建用户',
    input: {},
    output: User,
    async resolver(input) {
        const { result } = UserAPI.create(input);
        return result;
    },
});
