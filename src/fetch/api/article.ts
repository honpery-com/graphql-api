import { Article, ArticleId } from '../types';
import { BaseAPI } from './common';

export class ArticleAPI extends BaseAPI<Article> {
    public static list(condiitons: any) {
        return this.http.list({
            api: this.apis.core.article,
            query: condiitons,
        });
    }

    public static detail(_id: ArticleId) {
        return this.http.detail({
            api: this.apis.core.article,
            params: [_id],
        });
    }

    public static create(new_article: Article) {
        return this.http.create({
            api: this.apis.core.article,
            body: new_article,
        });
    }

    public static update(_id: ArticleId, new_article: Article) {
        return this.http.update({
            api: this.apis.core.article,
            params: [_id],
            body: new_article,
        });
    }

    public static delete(_id: ArticleId, new_article: Article) {
        return this.http.delete({
            api: this.apis.core.article,
            params: [_id],
        });
    }
}
