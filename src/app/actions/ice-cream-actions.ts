import { createAction, props } from '@ngrx/store';
import { IceCream } from '../models/ice-cream';


// Use createAction to define a function that will produce a desired Action
// with the data that is defined on the Action.

export const AddFlavor = createAction('[ICECREAM] Add', props< {iceCream: IceCream} >());
export const RemoveFlavor = createAction('[ICECREAM] Remove', props< {flavorId: number} >());

