import api from '../api.js';

export async function getRatingById() {
  const result = await api.get('/ratings/id');

  var sumrating = 0;
  var numratings = result.length
  
  for(i =0; i < numratings; i++) {
    sumrating += result[i].rating;


  };
  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
} 

/* 
        Behöver kollas på kanske lirar.
        Exempel på forloop
        https://stackoverflow.com/
        questions/39796610/working-out-average-reviews-javascript



export async function getAll() {
  const result = await api.get('/ratings');

  if (result.status === 200) return result.data;
  else {
    console.log(result.status);
    console.log(result.data);
    return [];
  }
}
*/
