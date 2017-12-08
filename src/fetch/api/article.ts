import { BaseAPI } from './_base';
import { Article, ArticleId, CommonQuery } from './_types';

export class ArticleAPI extends BaseAPI {

    static list(condiitons: Article & CommonQuery) {
        return this.http.get<Article>({
            api: this.apis.core.article,
            query: condiitons,
        });
    }

    static detail(_id: ArticleId) {
        return this.http.get<Article>({
            api: this.apis.core.article,
            params: [_id],
        });
    }

    static create(new_article: Article) {
        return this.http.post<Article>({
            api: this.apis.core.article,
            body: new_article,
        });
    }

    static update(_id: ArticleId, new_article: Article) {
        return this.http.put<Article>({
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
