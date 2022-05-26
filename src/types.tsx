export interface Product {
  name: string;
  category: Category;
  price: number;
}

export interface Category {
  id: string;
  name: string;
}

export type SortingMethod = 'catAsc' | 'catDesc' | 'priceAsc' | 'priceDesc'

export type ProductWQuantity = {
  product: Product
  quantity: number
}

export type AnyAction = {
  type: string
  payload: Product
}

export type CartState = ProductWQuantity[]