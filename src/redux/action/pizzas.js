import {pizzas} from "../../db";

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})


export const fetchPizzas = () => (dispatch) => {
    dispatch(setLoaded(false))
    dispatch(setPizzas(pizzas))
    dispatch(setLoaded(true))

};

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
})


