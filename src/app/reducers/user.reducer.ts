import { User } from './../models/user.model'
import { Action } from '@ngrx/store'

import { USERS } from '../mock-users';
import * as UserActions from './../actions/user.actions';

const initialState=USERS
            // 'user.isActive'; true
            // 'global.isChatRefreshActive': true,
            


export function userreducer(state= initialState, action: UserActions.Actions) {

    switch(action.type) {
        case UserActions.ADD_USER:
            return [...state, action.payload];

            case UserActions.REMOVE_USER:
            state.splice(action.payload, 1)
            return state;

            default:
            return state;
    }
}