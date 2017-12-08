import { BaseAPI } from './_base';
import { Category, CategoryId, CommonQuery } from './_types';

export class CategoryAPI extends BaseAPI {

    static list(conditions: Category & CommonQuery) {
        return this.http.get<Category>({
            api: this.apis.core.category,
            query: conditions,
        });
    }

    static detail(_id: CategoryId) {
        return this.http.get<Category>({
            api: this.apis.core.category,
            params: [_id],
        });
    }

    static create(new_category: Category) {
        return this.http.post<Category>({
            api: this.apis.core.category,
            body: new_category,
        });
    }

    static update(_id: CategoryId, new_category: Category) {
        return this.http.put<Category>({
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
