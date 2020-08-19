import { createSelector } from '@ngrx/store';
import { AppState as BaseAppState } from '../app.state';
import { IceCream } from '../models/ice-cream';


export interface AppState extends BaseAppState {
    iceCream: IceCream[];
}

export const getIceCream = (state: AppState) => state.iceCream;


