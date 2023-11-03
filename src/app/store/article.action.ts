import { Action } from "@ngrx/store";
import { Article } from "src/models/article.interface";


export enum ArticleActiontype {
    ADD_ITEM = '[ARTICLE] Add Article',
    REMOVE_ITEM = "[ARTICLE] Remove Article",
}
export class AddArticleAction implements Action{
    readonly type = ArticleActiontype.ADD_ITEM;
    constructor(public payload:Article){}
}
export class RemoveArticleAction implements Action{
    readonly type = ArticleActiontype.REMOVE_ITEM;
    constructor(public payload:Article){}
}
export type ArticleAction1 = AddArticleAction;
export type ArticleAction2 = RemoveArticleAction;