import {Container} from '@mui/material';
import ProductList from '../components/ProductList';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function Products() {
  return (
    <Container maxWidth="md">
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
