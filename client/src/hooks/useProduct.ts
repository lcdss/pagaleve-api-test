import useSWR from 'swr';
import { fakeStoreFetcher } from '../libs/fetch';
import type { Product } from '../types';

export function useProduct(id: number) {
  return useSWR<Product[]>(`/products/${id}`, fakeStoreFetcher);
}
