import {Container} from '@mui/material';
import ProductList from '../components/ProductList';

function Products() {
  return (
    <Container maxWidth="md">
      <ProductList pathname="products" />
    </Container>
  );
}

export default Products;
