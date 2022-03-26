import { createContext } from 'react';
import {
    OPENDRAWER,
} from '../constants/constants';

import { dispatch, InitialStateType } from '../types/index';

export const initialState: InitialStateType = {
    open: false
};

export type Action =
    | {
        type: 'OPENDRAWER', payload: {
            open: boolean,
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

        default:
            return state;
    }
};
