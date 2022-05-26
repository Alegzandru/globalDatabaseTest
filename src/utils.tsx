import { CartContext } from "Cart.context";
import React, { useContext } from "react"
import { Product, ProductWQuantity, SortingMethod } from "types";
import styles from './List/list.module.css'

export const RenderProducts = (products: Product[]) => {
  const {
    actions: { addProduct, removeOne },
  } = useContext(CartContext)

  return(
    products.map((product, index)=>(
      <tr key={index}>
        <td>{product.category.name}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td className={styles.addToCart}>
          <div style={{cursor: "pointer"}} onClick={() => removeOne(product)}>(-)</div>
          <div>Select</div>
          <div style={{cursor: "pointer"}} onClick={() => addProduct(product)}>(+)</div>
        </td>
      </tr>
    ))
  )
}

export const RenderCart = (products: ProductWQuantity[]) => {
  const {
    actions: { removeProduct, addProduct, removeOne },
  } = useContext(CartContext)

  return (
  products.map((productWQ, index)=>(
    <tr key={index}>
      <td>{productWQ.product.category.name}</td>
      <td>{productWQ.product.name}</td>
      <td>{productWQ.product.price}</td>
      <td>{productWQ.quantity}</td>
      <td className={styles.addToCart}>
        <div style={{cursor: "pointer"}} onClick={() => removeOne(productWQ.product)}>(-)</div>
        <div style={{cursor: "pointer"}} onClick={() => removeProduct(productWQ.product)}>Remove</div>
        <div style={{cursor: "pointer"}} onClick={() => addProduct(productWQ.product)}>(+)</div>
      </td>
    </tr>
  ))
)}

export const sortByMethod = (sorting: SortingMethod, products: Product[]) => {
  return products.sort((a: Product, b: Product) => {
    switch(sorting){
      case 'catAsc': return a['category']['name'] > b['category']['name'] ? 1 : b['category']['name'] > a['category']['name'] ? -1 : 0
      case 'catDesc': return b['category']['name'] > a['category']['name'] ? 1 : a['category']['name'] > b['category']['name'] ? -1 : 0
      case 'priceAsc': return a['price'] > b['price'] ? 1 : b['price'] > a['price'] ? -1 : 0
      case 'priceDesc': return b['price'] > a['price'] ? 1 : a['price'] > b['price'] ? -1 : 0
      default: return a['category']['name'] > b['category']['name'] ? 1 : b['category']['name'] > a['category']['name'] ? -1 : 0
    }
  })
}