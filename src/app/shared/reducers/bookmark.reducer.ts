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
    },
    {
        id: 'bookmark-sample-2',
        name: 'AWS tutorial',
        url: 'https://aws.amazon.com/getting-started/hands-on/',
        group: 'group-sample-3'
    },
    {
        id: 'bookmark-sample-3',
        name: 'Angular docs',
        url: 'https://angular.io/',
        group: 'group-sample-4'
    },
    {
        id: 'bookmark-sample-4',
        name: 'Java Basic',
        url: 'https://www.tutorialspoint.com/java/index.htm',
        group: 'group-sample-6'
    },

    {
        id: 'bookmark-sample-5',
        name: 'Bloomberg',
        url: 'https://www.bloomberg.com/',
        group: 'group-sample-8'
    }, {
        id: 'bookmark-sample-6',
        name: 'Sky sports',
        url: 'https://www.skysports.com/',
        group: 'group-sample-9'
    },
    {
        id: 'bookmark-sample-7',
        name: 'Maps',
        url: 'https://maps.google.com/',
        group: 'group-root'
    },
    {
        id: 'bookmark-sample-8',
        name: 'Youtube',
        url: 'https://www.youtube.com/',
        group: 'group-root'
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