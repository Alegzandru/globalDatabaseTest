import { CartContext } from 'Cart.context';
import React, { useContext, useEffect, useState } from 'react';
import { Product, SortingMethod } from 'types';
import { RenderProducts, sortByMethod } from 'utils';
import styles from './list.module.css'

const List = () => {

  const [products, setProducts] = useState<Product[]>([])
  const [sorting, setSorting] = useState<SortingMethod>('catAsc')
  const {state} = useContext(CartContext)

  useEffect(() => {
    (async () => {
      const productsRaw = await fetch('http://localhost:3001/api/products/')
      const productsRes = await productsRaw.json()
      setProducts(productsRes)
    })()
  }, [])

  useEffect(() => console.log(state), [state])

  return (
    <div>
      <h2>Products:</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.flex} onClick={() => {setSorting(sorting === 'catAsc' ? 'catDesc' : 'catAsc')}}>
              <div>Category</div> 
              <div className={styles.arrow} style={{
                transform: sorting === 'catAsc' ? 'rotate(360deg)' : 'rotate(180deg)'
              }}>V</div>
            </th>
            <th>Name</th>
            <th className={styles.flex} onClick={() => {setSorting(sorting === 'priceAsc' ? 'priceDesc' : 'priceAsc')}}>
              <div>Price</div> 
              <div className={styles.arrow} style={{
                transform: sorting === 'priceDesc' ? 'rotate(360deg)' : 'rotate(180deg)'
              }}>V</div>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {RenderProducts(sortByMethod(sorting, products))}
        </tbody>
      </table>
    </div>
  )
}

export default List