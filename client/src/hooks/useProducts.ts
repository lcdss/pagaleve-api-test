import useSWR from 'swr';
import { fakeStoreFetcher } from '../libs/fetch';
import type { Product } from '../types';

export function useProducts() {
  return useSWR<Product[]>('/products', fakeStoreFetcher);
}
