import {
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router';
import Page from '../components/Page';
import { useProducts } from '../hooks/useProducts';

function HomePage() {
  const navigate = useNavigate();
  const { data, error } = useProducts();

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

  return (
    <Page>
      <Grid container spacing={2}>
        {data.map((product) => (
          <Grid key={product.id} item sm={6} md={4}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '100%',
              }}
            >
              <CardMedia
                component="img"
                height={200}
                image={product.image}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="HighlightText"
                  sx={{ mb: 2 }}
                >
                  ${product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  component={Button}
                  underline={'none'}
                  variant="button"
                  onClick={() => navigate('/checkout', { state: { product } })}
                >
                  Buy
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Page>
  );
}

export default HomePage;
