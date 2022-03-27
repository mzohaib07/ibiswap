import { Action } from "../context/Context";


export type InitialStateType = {
    open: boolean
}

export type dispatch = React.Dispatch<Action>;


export interface Column {
    id: 'collection' | 'volume' | '24' | '7' | 'floorprice' | 'owners' | 'items';
    label: string;
    minWidth?: number;
    format?: (value: number) => string;

}

export interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}


export function createData(
    name: string,
    code: string,
    population: number,
    size: number,
): Data {
    const density = population / size;
    return { name, code, population, size, density };
}
