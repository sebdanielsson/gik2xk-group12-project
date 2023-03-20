import {Container} from '@mui/material';
import {useLocation} from 'react-router-dom';
import ItemList from '../components/ItemList';

function Products() {
  const location = useLocation();
  console.log(location);
  return (
    <Container maxWidth="md">
      <ItemList pathname={location.pathname} />
    </Container>
  );
}

export default Products;
