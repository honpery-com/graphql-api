import { Tag, TagId } from '../types';
import { BaseAPI } from './common';

export class TagAPI extends BaseAPI<Tag> {

    public static list(conditions: any) {
        return this.http.list({
            api: this.apis.core.tag,
            query: conditions,
        });
    }

    public static detail(_id: TagId) {
        return this.http.detail({
            api: this.apis.core.tag,
            params: [_id],
        });
    }

    public static create(new_tag: Tag) {
        return this.http.create({
            api: this.apis.core.tag,
            body: new_tag,
        });
    }

    public static update(_id: TagId, new_tag: Tag) {
        return this.http.update({
            api: this.apis.core.tag,
            params: [_id],
            body: new_tag,
        });
    }

    public static delete(_id: TagId) {
        return this.http.delete({
            api: this.apis.core.tag,
            params: [_id],
        });
    }
}
