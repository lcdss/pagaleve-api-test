import { CssBaseline } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import AdapterDateFns from '@mui/lab/AdapterDayjs';
import { LocalizationProvider } from '@mui/lab';
import routes from './routes';

function App() {
  const element = useRoutes(routes);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CssBaseline />
      {element}
    </LocalizationProvider>
  );
}

export default App;
