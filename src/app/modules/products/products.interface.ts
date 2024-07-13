export interface IProduct {
  name: string;
  image: string;
  price: number;
  rating: number;
  description: string;
  category: string;
  brand: string;
  stockQuantity: number;
}
export interface ICartPayload {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ICheckout {
  name: string;
  email: string;
  phoneNumber: number;
  deliveryAddress: string;
  checkoutProducts: ICartPayload[];
}

export interface ICartQuery {
  cartProducts: ICartPayload;
}
