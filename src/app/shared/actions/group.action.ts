
import { Action } from '@ngrx/store';
import * as Constants from '../constants/constants';
import { Group } from '../models/group.model';

export class Add implements Action {
    readonly type = Constants.GROUP_ADD_ACTION;

    constructor(public payload: Group) {
    }
}

export class Update implements Action {
    readonly type = Constants.GROUP_UPDATE_ACTION;

    constructor(public payload: Group) {
    }
}

export class Remove implements Action {
    readonly type = Constants.GROUP_REMOVE_ACTION;

    constructor(public payload: Group) {
    }
}

export type Actions = Add | Update | Remove;