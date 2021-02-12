import * as BookmarkAction from './../actions/boookmark.action';
import * as ActionType from './../constants/constants';
import { BookmarkRepository } from '../models/bookmark-repository.model';


const initialState: BookmarkRepository= {
    'bookmark-sample-1':{
        id: 'bookmark-sample-1',
        name: 'Github',
        url: 'https://github.com/',
        group: null
    },
    'bookmark-sample-2': {
        id: 'bookmark-sample-2',
        name: 'Gitlab',
        url: 'https://gitlab.com/',
        group: null
    },

}


export function bookmarkReducer(state: BookmarkRepository[] = [initialState], action: BookmarkAction.Actions) {

    
    switch(action.type) {
        case ActionType.BOOKMARK_ADD_ACTION:
            return [...state, action.payload];
        
        case ActionType.BOOKMARK_UPDATE_ACTION:
            return [...state, action.payload];
                
        case ActionType.BOOKMARK_REMOVE_ACTION:
            return [...state, action.payload];
        default:
            return state;
    }
}