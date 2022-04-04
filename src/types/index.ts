import { Action } from "../context/Context";


export type InitialStateType = {
    open: boolean
    show: boolean
    activeNav: string
}

export type dispatch = React.Dispatch<Action>;
