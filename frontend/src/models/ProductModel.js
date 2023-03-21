import api from '../api.js';

export async function getAll(url = '/products') {
  const result = await api.get(url);
 /*  array.forEach(result => {
    result.rating = api.getRatingById(result.id);
    
  }); */

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}

export async function getOne(id) {
  const result = await api.get(`/products/${id}`);

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return {};
  }
}
