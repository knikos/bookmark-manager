import * as BookmarkAction from './../actions/boookmark.action';
import * as ActionType from './../constants/constants';
import { environment } from './../../../environments/environment';
import { Bookmark } from '../models/bookmark.model';


const initialState: Bookmark[] = !environment.sampleData ? [] : [

    {
        id: 'bookmark-sample-1',
        name: 'Github',
        url: 'https://github.com/',
        group: 'group-sample-1'
    }, {
        id: 'bookmark-sample-2',
        name: 'Gitlab 2',
        url: 'https://gitlab.com/',
        group: 'group-sample-2'
    },
    {
        id: 'bookmark-sample-3',
        name: 'Gitlab 3',
        url: 'https://gitlab.com/',
        group: 'group-sample-3'
    },
    {
        id: 'bookmark-sample-4',
        name: 'Gitlab 4',
        url: 'https://gitlab.com/',
        group: 'group-sample-11'
    },
    {
        id: 'bookmark-sample-5',
        name: 'Gitlab 5',
        url: 'https://gitlab.com/',
        group: 'group-sample-11'
    },
];


export function bookmarkReducer(state: Bookmark[] = initialState, action: BookmarkAction.Actions) {
    const newState: Bookmark[] = Object.assign({}, state);
    const index = state.indexOf(action.payload);

    switch (action.type) {
        case ActionType.BOOKMARK_ADD_ACTION:
            return [...state, action.payload];

        case ActionType.BOOKMARK_UPDATE_ACTION:

            newState[index] = action.payload;
            return Object.assign({}, state, newState);
        // return [...state, action.payload];

        case ActionType.BOOKMARK_REMOVE_ACTION:
            return [...state.slice(0, index), ...state.slice(index + 1)];
        default:
            return state;
    }
}