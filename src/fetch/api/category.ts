import { Category, CategoryId } from '../types';
import { BaseAPI } from './common';

export class CategoryAPI extends BaseAPI<Category> {

    public static list(conditions: any) {
        return this.http.list({
            api: this.apis.core.category,
            query: conditions,
        });
    }

    public static detail(_id: CategoryId) {
        return this.http.detail({
            api: this.apis.core.category,
            params: [_id],
        });
    }

    public static create(new_category: Category) {
        return this.http.create({
            api: this.apis.core.category,
            body: new_category,
        });
    }

    public static update(_id: CategoryId, new_category: Category) {
        return this.http.update({
            api: this.apis.core.category,
            params: [_id],
            body: new_category,
        });
    }

    public static delete(_id: CategoryId) {
        return this.http.delete({
            api: this.apis.core.category,
            params: [_id],
        });
    }

}
