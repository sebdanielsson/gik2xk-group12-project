import ProductCard from './ProductCard';
import {getAll} from '../models/ProductModel';
import {useEffect, useState} from 'react';
import {Grid} from '@mui/material';

function ProductList({pathname}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll(pathname).then((products) => setProducts(products));
  }, [pathname]);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="flex-start" spacing={2}>
      {products.map((product) => (
        <Grid item xs key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
