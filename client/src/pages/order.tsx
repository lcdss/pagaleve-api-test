import { Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

export default function OrderPage() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');

  if (status === 'success') {
    return <Typography>Success</Typography>;
  }

  return <Typography>Canceled</Typography>;
}
