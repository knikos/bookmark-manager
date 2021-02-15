import * as ActionType from './../constants/constants';
import * as GroupAction from './../actions/group.action';
import { Group } from '../models/group.model';
import { environment } from './../../../environments/environment';

export const GROUP_ROOT_NODE = 'group-root';
const initialState: Group[] = !environment.sampleData ?

    // default tree stucture
    [{
        id: GROUP_ROOT_NODE,
        name: 'All bookmarks',
        path: '/',
        selected: true,
        children: []
    },]
    //  tree stucture with sample data
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
                    children: []
                },
                {
                    id: 'group-sample-2',
                    name: 'Tutorials',
                    path: '/tutorials',
                    selected: false,
                    children: [
                        {
                            id: 'group-sample-3',
                            name: 'Cloud',
                            path: '/',
                            selected: false,
                            children: []
                        },
                        {
                            id: 'group-sample-4',
                            name: 'Frontend',
                            path: '',
                            selected: false,
                            children: []
                        }
                        , {
                            id: 'group-sample-5',
                            name: 'Backend',
                            path: '/backend',
                            selected: false,
                            children: [
                                {
                                    id: 'group-sample-6',
                                    name: 'Java',
                                    path: '/java',
                                    selected: false,
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 'group-sample-7',
                    name: 'News',
                    path: '/news',
                    selected: false,
                    children: [

                        {
                            id: 'group-sample-8',
                            name: 'Financial',
                            path: '/financial',
                            selected: false,
                            children: []
                        },
                        {
                            id: 'group-sample-9',
                            name: 'Sports',
                            path: '/sports',
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
            return [action.payload];

        case ActionType.GROUP_REMOVE_ACTION:
            // TODO
            return state;
        default:
            return state;
    }
}