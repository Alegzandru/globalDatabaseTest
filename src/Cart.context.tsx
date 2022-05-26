import { createContext, PropsWithChildren, useReducer } from 'react'
import { Dispatch } from 'react'
import React from 'react'
import { AnyAction, CartState, Product, ProductWQuantity } from 'types'

export const ACTIONS = {
  addProduct: 'ADD_PRODUCT',
  removeProduct: 'REMOVE_PRODUCT',
  removeOne: 'REMOVE_ONE'
}

const emptyState: CartState = []

const useActions = (dispatch: Dispatch<AnyAction>) => ({
  removeProduct: (product: Product) => dispatch({ type: ACTIONS.removeProduct, payload: { ...product } }),
  addProduct: (product: Product) => dispatch({ type: ACTIONS.addProduct, payload: { ...product } }),
  removeOne: (product: Product) => dispatch({ type: ACTIONS.removeOne, payload: { ...product } }),
})

export const CartContext = createContext({
  state: emptyState,
  actions: {} as ReturnType<typeof useActions>,
})

const removeProduct = (state: CartState, payload: Product): CartState => {
  const newState = state.filter((productWQ: ProductWQuantity) => productWQ.product.name !== payload.name)
  return ([
    ...newState,
  ])
}

const addProduct = (state: CartState, payload: Product): CartState => {
  if(state.filter((productWQ) => productWQ.product.name === payload.name).length > 0){
    const newState = state.map((productWQ) => productWQ.product.name === payload.name ? {product: payload, quantity: productWQ.quantity+1} : productWQ)
    return([...newState])
  } else{
    return([
      ...state,
      {product: payload, quantity: 1}
    ])
  }
}

const removeOne = (state: CartState, payload: Product): CartState => {
  const newState = state.map((productWQ: ProductWQuantity) => productWQ.product.name === payload.name ? 
    {...productWQ, quantity : productWQ.quantity-1}
    :
    {...productWQ}
  )
  const filteredState = newState.filter((productWQ) => productWQ.quantity)
  return([
  ...filteredState
])}

const cartReducer = (state: CartState, { type, payload }: AnyAction) => {
  switch (type) {
    case ACTIONS.removeProduct:
      return removeProduct(state, payload)

    case ACTIONS.addProduct:
      return addProduct(state, payload)

    case ACTIONS.removeOne:
      return removeOne(state, payload)

    default:
      return state
  }
}

export const CartContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [state, dispatch] = useReducer(cartReducer, emptyState)

  const actions = useActions(dispatch)

  return (
    <CartContext.Provider value={{ state, actions }} >
      {children}
    </CartContext.Provider>
  )
}