import React, { createContext, useReducer } from 'react';

import { pizzaSizeSelected } from '../actions/userActions';
import { getPizzaSizeSelected } from '../reducers/userReducer';

export const PizzaContext = createContext();

const initialState = {
    small: 0,
    medium: 200,
    large: 0,
    adult: 1,
    child: 0
}

const PizzaSizeContextProvider = (props) => {

    const [ vlaueGlobal, dispatchActionsGlobal ] = useReducer(getPizzaSizeSelected, initialState);

    return (
        <PizzaContext.Provider
            value={{
                valueGlobalState: vlaueGlobal,
                pizzaSize: (size, minusOrPlus) => dispatchActionsGlobal(pizzaSizeSelected(size, minusOrPlus))
            }}
        >
            {props.children}
        </PizzaContext.Provider>
    )
}

export default PizzaSizeContextProvider;