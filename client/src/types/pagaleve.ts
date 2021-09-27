export interface Checkout {
  cancel_url: string;
  complete_url: string;
  metadata: Metadata;
  shopper: Shopper;
  order: Order;
}

export interface Metadata {}

export interface Order {
  reference: string;
  description: string;
  metadata: Metadata;
  shipping: Shipping;
  tax: number;
  amount: number;
  items: Item[];
}

export interface Item {
  name: string;
  sku: string;
  quantity: number;
  price: number;
}

export interface Shipping {
  amount: number;
  pickup: boolean;
  address: Address;
  tracking: Tracking;
}

export interface Address {
  name: string;
  city: string;
  state: string;
  street: string;
  zip_code: string;
  neighborhood: string;
  number: string;
  complement: string;
  phone_number: string;
}

export interface Tracking {
  url: string;
  code: string;
  carrier: string;
}

export interface Shopper {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  birth_date: string;
  cpf: string;
  billing_address: Address;
}
