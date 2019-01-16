import { Hero } from './../models/hero.model'
import { Action } from '@ngrx/store'

import * as HeroActions from './../actions/hero.actions'
import { HEROES } from '../mock-heroes';

const initialState = HEROES



export function reducer(state= initialState, action: HeroActions.Actions) {

     // Section 3
     switch(action.type) {
        case HeroActions.ADD_HERO:
            return [...state, action.payload];

            case HeroActions.REMOVE_HERO:
            state.splice(action.payload, 1)
            return state;

        default:
            return state;
    }
}