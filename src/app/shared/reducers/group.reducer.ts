import * as ActionType from './../constants/constants';
import * as GroupAction from './../actions/group.action';
import { Group } from '../models/group.model';

const initialState: Group[] =[ 
   {
        id: 'group-sample-1',
        name: 'Useful software',
        path: '/software',
        children: [
            {
                id: 'group-sample-3',
                name: 'Bitbucket',
                path: '/news',
                children: []
            },
            {
                id: 'group-sample-4',
                name: 'Gitlab',
                path: '/news',
                children: []
            }
            ,  {
                id: 'group-sample-5',
                name: 'Open source',
                path: '/news',
                children: [
                    {
                        id: 'group-sample-6',
                        name: 'Postman',
                        path: '/news',
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
        children: [

            {
                id: 'group-sample-11',
                name: 'NY Times',
                path: '/news',
                children: []
            }
        ]
    }
]


export function groupReducer(state: Group[] = initialState, action: GroupAction.Actions) {

    
    switch(action.type) {
        case ActionType.GROUP_ADD_ACTION:
            return [...state, action.payload];
        
        case ActionType.GROUP_UPDATE_ACTION:
            return [...state, action.payload];
                
        case ActionType.GROUP_REMOVE_ACTION:
            return [...state, action.payload];
        default:
            return state;
    }
}