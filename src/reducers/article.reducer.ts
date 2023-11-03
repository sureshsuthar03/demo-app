import { Action } from "@ngrx/store";
import { ArticleAction1, ArticleAction2, ArticleActiontype } from "src/app/store/article.action";
import { Article } from "src/models/article.interface";
// const initialState: Article[] = []
export const initialState: Array<Article> = [];

export function ArticleReducer(state: Article[] = initialState, action: Action) {
    switch (action.type) {
        case ArticleActiontype.ADD_ITEM:
            return [...state, (action as ArticleAction1).payload];
        case ArticleActiontype.REMOVE_ITEM:
            return [...state].filter(obj =>obj.id !== (action as ArticleAction2).payload.id);
        default:
            return state;
    }
}       