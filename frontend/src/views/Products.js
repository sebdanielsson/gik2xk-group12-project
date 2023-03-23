import {useState} from 'react';
import {Container} from '@mui/material';
import {useLocation} from 'react-router-dom';
import ProductList from '../components/ProductList';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {Alert} from '@mui/material';

function Products() {
  const location = useLocation();

  const message = location?.state?.message;
  const [alertOpen, setAlertOpen] = useState(location.state != null);
  return (
    <Container maxWidth="md">
      {alertOpen && message && (
        <Alert severity="error" sx={{width: '100%', marginBottom: '20px'}}>
          {message}
        </Alert>
      )}
      <ProductList pathname="products" />
      <Fab
        color="primary"
        aria-label="add"
        href="/products/new"
        sx={{position: 'fixed', bottom: '50px', right: '50px'}}>
        <AddIcon />
      </Fab>
    </Container>
  );
}

export default Products;
