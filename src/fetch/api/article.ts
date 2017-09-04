import { Article, ArticleId } from '../types';
import { BaseAPI } from './common';

export class ArticleAPI extends BaseAPI {

    static list(condiitons: any) {
        return this.http.list<Article>({
            api: this.apis.core.article,
            query: condiitons,
        });
    }

    static detail(_id: ArticleId) {
        return this.http.detail<Article>({
            api: this.apis.core.article,
            params: [_id],
        });
    }

    static create(new_article: Article) {
        return this.http.create<Article>({
            api: this.apis.core.article,
            body: new_article,
        });
    }

    static update(_id: ArticleId, new_article: Article) {
        return this.http.update<Article>({
            api: this.apis.core.article,
            params: [_id],
            body: new_article,
        });
    }

    static delete(_id: ArticleId, new_article: Article) {
        return this.http.delete<Article>({
            api: this.apis.core.article,
            params: [_id],
        });
    }

}
