import { Mutation } from 'happy-graphql';
import { AuthAPI } from '../../fetch';
import { User } from '../user';

export const LoginMutation = Mutation('login', {
    desc: '登录',
    input: {},
    output: User,
    async resolver(input) {
        const { result } = await AuthAPI.login(input);
        return result;
    },
});

export const RegisterMutation = Mutation('register', {
    desc: '注册',
    input: {},
    output: User,
    async resolver(input) {
        const { result } = await AuthAPI.register(input);
        return result;
    },
});
