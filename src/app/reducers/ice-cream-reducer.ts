import { createReducer, on } from '@ngrx/store';
import { IceCream } from '../models/ice-cream';
import { AddFlavor, RemoveFlavor} from '../actions/ice-cream-actions';

const initialState: IceCream = {
    flavor: 'Vanilla',
    maker: 'Honey Hut'
}

// export const iceCreamReducer = createReducer<IceCream[]>(
export const iceCreamReducer = createReducer<IceCream[]>(
    [initialState],
    on(AddFlavor, (state, action) => {
        return [...state, action.iceCream];
    }),
    on(RemoveFlavor, (state, action) => {
        return state.filter((flavor, index , stateArray) => (index !== action.flavorId));
    })
);
