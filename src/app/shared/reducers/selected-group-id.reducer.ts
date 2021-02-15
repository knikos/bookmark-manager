import * as ActionType from '../constants/constants';
import * as SelectedGroupAction from './../actions/selected-group.action';


export function selectedGroupReducer(state: string, action: SelectedGroupAction.Actions) {
    switch(action.type) {
        case ActionType.SELECTED_GROUP_UPDATE_ACTION:
            return action.payload;
        default:
            return state;
    }
}