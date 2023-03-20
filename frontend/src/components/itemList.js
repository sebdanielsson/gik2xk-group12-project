import {Box} from '@mui/material';
import ItemComponent from './ItemComponent';
import {getAll} from '../models/ProductModel';
import {useEffect, useState} from 'react';

function ItemList({pathname}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll(pathname).then((products) => setProducts(products));
  }, [pathname]);

  return (
    <Box>
      {products.map((product) => {
        return <ItemComponent key={product.id} product={product} />;
      })}
    </Box>
  );
}

export default ItemList;
