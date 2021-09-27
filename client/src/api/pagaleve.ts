import type { Customer } from '../types';

function authenticate() {
  // TODO
  return Promise.resolve();
}

function createCheckout({
  customer,
  value,
}: {
  customer: Customer;
  value: number;
}) {
  // TODO
  return Promise.resolve();
}

function createPayment() {
  // TODO
  return Promise.resolve();
}

function capturePayment() {
  // TODO
  return Promise.resolve();
}

export { authenticate, createCheckout, createPayment, capturePayment };
