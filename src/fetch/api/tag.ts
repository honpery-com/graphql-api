import { Tag, TagId } from '../types';
import { BaseAPI } from './common';

export class TagAPI extends BaseAPI {

    static list(conditions: any) {
        return this.http.list<Tag>({
            api: this.apis.core.tag,
            query: conditions,
        });
    }

    static detail(_id: TagId) {
        return this.http.detail<Tag>({
            api: this.apis.core.tag,
            params: [_id],
        });
    }

    static create(new_tag: Tag) {
        return this.http.create<Tag>({
            api: this.apis.core.tag,
            body: new_tag,
        });
    }

    static update(_id: TagId, new_tag: Tag) {
        return this.http.update<Tag>({
            api: this.apis.core.tag,
            params: [_id],
            body: new_tag,
        });
    }

    static delete(_id: TagId) {
        return this.http.delete<Tag>({
            api: this.apis.core.tag,
            params: [_id],
        });
    }

}
