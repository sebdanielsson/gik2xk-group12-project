import {Container} from '@mui/material';
import {useLocation} from 'react-router-dom';
import ProductList from '../components/ProductList';

function Products() {
  const location = useLocation();
  return (
    <Container maxWidth="md">
      <ProductList pathname={location.pathname} />
    </Container>
  );
}

export default Products;
