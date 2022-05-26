import { CartContext } from "Cart.context"
import React, { useContext } from "react"
import { RenderCart } from "utils"
import styles from '../List/list.module.css'

const Cart = () => {
  const {state} = useContext(CartContext)

  return(
  <div>
    <h2>
        Cart:
      </h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {RenderCart(state)}
        </tbody>
      </table>
  </div>
)}

export default Cart