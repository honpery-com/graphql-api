import { Category, CategoryId } from '../types';
import { BaseAPI } from './common';

export class CategoryAPI extends BaseAPI {

    static list(conditions: any) {
        return this.http.list<Category>({
            api: this.apis.core.category,
            query: conditions,
        });
    }

    static detail(_id: CategoryId) {
        return this.http.detail<Category>({
            api: this.apis.core.category,
            params: [_id],
        });
    }

    static create(new_category: Category) {
        return this.http.create<Category>({
            api: this.apis.core.category,
            body: new_category,
        });
    }

    static update(_id: CategoryId, new_category: Category) {
        return this.http.update<Category>({
            api: this.apis.core.category,
            params: [_id],
            body: new_category,
        });
    }

    static delete(_id: CategoryId) {
        return this.http.delete<Category>({
            api: this.apis.core.category,
            params: [_id],
        });
    }

}
