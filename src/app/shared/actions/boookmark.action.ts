  
import {Action} from '@ngrx/store';
import * as Constants from '../constants/constants';
import {Bookmark} from '../models/bookmark.model';

export class Add implements Action {
    readonly type = Constants.BOOKMARK_ADD_ACTION;

    constructor(public payload: Bookmark) {
    }
}

export class Update implements Action {
    readonly type = Constants.BOOKMARK_UPDATE_ACTION;

    constructor(public payload: Bookmark) {
    }
}

export class Remove implements Action {
    readonly type = Constants.BOOKMARK_REMOVE_ACTION;

    constructor(public payload: Bookmark) {
    }
}

export type Actions = Add | Update | Remove;
