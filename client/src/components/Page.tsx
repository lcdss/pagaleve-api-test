import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface PageProps {
  children: ReactNode;
}

function Page({ children }: PageProps) {
  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <AppBar position="static">
        <Toolbar>
          <Box component={Link} to="/">
            <Logo height={32} />
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pagaleve Test
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 2 }}>
        <Container>{children}</Container>
      </Box>
    </Box>
  );
}

export default Page;
