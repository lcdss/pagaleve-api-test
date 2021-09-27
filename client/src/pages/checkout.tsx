import { CircularProgress, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Location } from 'history';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../api';
import CheckoutForm from '../components/CheckoutForm';
import Page from '../components/Page';
import { useProduct } from '../hooks/useProduct';
import { Product, Customer } from '../types';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { state } = useLocation() as Location<{ product: Product } | null>;
  const { data, error } = useProduct(state?.product.id ?? 0);

  if (!state?.product) {
    navigate('/');
    return null;
  }

  if (error) {
    return <span>Error</span>;
  }

  if (!data) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  const handleCheckout = (data: Customer) => {
    api.pagaleve
      .createCheckout({
        customer: data,
        value: state.product.price,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log('Oooops!', error);
      });
  };

  return (
    <Page>
      <Typography variant="h5">Checkout</Typography>
      <Typography variant="body2">
        You are buying a {state.product.title} for ${state.product.price}. Fill
        the form bellow and pay with Pagaleve, to confirm your order.
      </Typography>
      <CheckoutForm onSubmit={handleCheckout} />
    </Page>
  );
}
