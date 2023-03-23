import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Container, TextField, Button} from '@mui/material';
import {getOne, update} from '../models/ProductModel.js';
import {Box, color} from '@mui/system';

function EditProduct() {
  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState({});
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    getOne(productId).then((product) => {
      setProduct(product);
    });
  }, [productId]);

  useEffect(() => {
    setTitle(product.title);
    setDescription(product.description);
    setImageUrl(product.imageUrl);
    setPrice(product.price);
  }, [product]);

  const onSave = () => {
    update({id: productId, title, description, imageUrl, price}).then((product) => {
      console.log('product', product);
      setTitle(product.title);
      setDescription(product.description);
      setImageUrl(product.imageUrl);
      setPrice(product.price);
    });
  };

  return (
    <Container sx={{paddingBottom: '2rem', display: 'flex', flexDirection: 'column'}} maxWidth="md">
      <TextField
        size="small"
        label="Titel"
        variant="standard"
        multiline
        onChange={(event) => setTitle(event.target.value)}
        margin="dense"
        value={title}
      />
      <TextField
        size="small"
        label="Description"
        variant="standard"
        multiline
        minRows={4}
        onChange={(event) => setDescription(event.target.value)}
        margin="dense"
        value={description}
      />
      <TextField
        size="small"
        label="Image URL"
        variant="standard"
        multiline
        onChange={(event) => setImageUrl(event.target.value)}
        margin="dense"
        value={imageUrl}
      />
      <TextField
        size="small"
        label="Price"
        variant="standard"
        multiline
        onChange={(event) => setPrice(event.target.value)}
        margin="dense"
        value={price}
      />
      <Box>
        <Button variant="contained" onClick={onSave} sx={{marginTop: '1rem'}} color="success">
          Uppdatera
        </Button>
      </Box>
    </Container>
  );
}

export default EditProduct;
