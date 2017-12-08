import { CommonQuery, Tag, TagId } from './_types';
import { BaseAPI } from './_base';

export class TagAPI extends BaseAPI {

    static list(conditions: Tag & CommonQuery) {
        return this.http.get<Tag>({
            api: this.apis.core.tag,
            query: conditions,
        });
    }

    static detail(_id: TagId) {
        return this.http.get<Tag>({
            api: this.apis.core.tag,
            params: [_id],
        });
    }

    static create(new_tag: Tag) {
        return this.http.post<Tag>({
            api: this.apis.core.tag,
            body: new_tag,
        });
    }

    static update(_id: TagId, new_tag: Tag) {
        return this.http.put<Tag>({
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
