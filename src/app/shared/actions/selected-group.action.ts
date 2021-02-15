  
import {Action} from '@ngrx/store';
import * as Constants from '../constants/constants';


export class Update implements Action {
    readonly type = Constants.SELECTED_GROUP_UPDATE_ACTION;

    constructor(public payload: string) {
    }
}


export type Actions =  Update ;