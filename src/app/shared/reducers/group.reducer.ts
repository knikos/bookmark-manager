import * as ActionType from './../constants/constants';
import * as GroupAction from './../actions/group.action';
import { Group } from '../models/group.model';
import { environment } from './../../../environments/environment';

export const GROUP_ROOT_NODE = 'group-root';
const initialState: Group[] = !environment.sampleData ?
    [{
        id: GROUP_ROOT_NODE,
        name: 'All bookmarks',
        path: '/',
        selected: true,
        children: []
    },]
    : [
        {
            id: GROUP_ROOT_NODE,
            name: 'All bookmarks',
            path: '/',
            selected: true,
            children: [
                {
                    id: 'group-sample-1',
                    name: 'Useful software',
                    path: '/software',
                    selected: false,
                    children: [
                        {
                            id: 'group-sample-3',
                            name: 'Bitbucket',
                            path: '/news',
                            selected: false,
                            children: []
                        },
                        {
                            id: 'group-sample-4',
                            name: 'Gitlab',
                            path: '/news',
                            selected: false,
                            children: []
                        }
                        , {
                            id: 'group-sample-5',
                            name: 'Open source',
                            path: '/news',
                            selected: false,
                            children: [
                                {
                                    id: 'group-sample-6',
                                    name: 'Postman',
                                    path: '/news',
                                    selected: false,
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'group-sample-2',
                    name: 'News',
                    path: '/news',
                    selected: false,
                    children: [

                        {
                            id: 'group-sample-11',
                            name: 'NY Times',
                            path: '/news',
                            selected: false,
                            children: []
                        }
                    ]
                }]
        }
    ]


export function groupReducer(state: Group[] = initialState, action: GroupAction.Actions) {
    const newState: Group[] = Object.assign({}, state, state);
    switch (action.type) {
        case ActionType.GROUP_ADD_ACTION:
            return [...state, action.payload];

        case ActionType.GROUP_UPDATE_ACTION:
            newState[action.payload.id] = action.payload;
            return Object.assign({}, state, newState);

        case ActionType.GROUP_REMOVE_ACTION:
            let i = state.indexOf(state[action.payload.id]);
            delete state[i];
            return state;
        default:
            return state;
    }
}