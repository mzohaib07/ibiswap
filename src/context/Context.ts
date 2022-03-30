import { createContext } from 'react';
import {
    ACTIVENAV,
    OPENDRAWER,
} from '../constants/constants';

import { dispatch, InitialStateType } from '../types/index';


export const initialState: InitialStateType = {
    open: false,
    show: false,
    activeNav: ''
};

export type Action =
    | {
        type: 'OPENDRAWER', payload: {
            open: boolean,
        }
    } |
    {
        type: 'ACTIVENAV', payload: {
            show: boolean
            activeNav: string
        }
    }


export const Context = createContext<{
    state: InitialStateType;
    dispatch: dispatch;
}>({
    state: initialState,
    dispatch: () => undefined,
});

export const Reducer = (state: InitialStateType, action: Action): InitialStateType => {
    const {
        type,
    } = action;
    switch (type) {
        case OPENDRAWER:
            return {
                ...state,
                open: action.payload.open,
            };
        case ACTIVENAV:
            return {
                ...state,
                show: action.payload.show,
                activeNav: action.payload.activeNav
            }

        default:
            return state;
    }
};
