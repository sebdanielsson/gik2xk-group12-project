import ProductCard from './ProductCard';
import {getAll} from '../models/ProductModel';
import {useEffect, useState} from 'react';
import {Grid} from '@mui/material';

function ProductList({pathname}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll(pathname).then((products) => setProducts(products));
  }, [pathname]);

  return products.map((product) => {
    return (
      <Grid>
        <ProductCard product={product} key={product.id} />
      </Grid>
    );
  });
}

export default ProductList;
