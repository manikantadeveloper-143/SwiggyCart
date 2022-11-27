import { Action } from "@remix-run/router"

const INIT_STATE = {
    carts: []
}

export const cartReducer = (state = INIT_STATE, { type, payload }) => {
    switch (type) {
        case "ADD_CART":

            const ItemIndex = state.carts.findIndex((item) => item.id === payload.id)
            if (ItemIndex >= 0) {
                state.carts[ItemIndex].qnty += 1
            }
            else {
                const temp = { ...payload, qnty: 1 }
                return { ...state, carts: [...state.carts, temp] }
            }


        case "RMV_CART":
            const data = state.carts.filter((el) => el.id !== payload)
            return { ...state, carts: data }


        case "RMV_ONE":
            const ItemIndex_dec = state.carts.findIndex((item) => item.id === payload.id)
            if (state.carts[ItemIndex_dec].qnty >= 1) {
                const dltitem = state.carts[ItemIndex_dec].qnty -= 1;
                console.log([...state.carts, dltitem])

                return {
                    ...state,
                    carts: [...state.carts]
                }
            }
            else if (state.carts[ItemIndex_dec].qnty === 1) {
                const data = state.carts.filter((el) => el.id !== payload)
                return { ...state, carts: data }

            }

        default:
            return state
    }
}