import axios from 'axios';

async function getResults(query) {
  const proxy = 'https://cors-anywhere.herokuapp.com/'
  const key = '64f5793f1f4299767bf25a86015933f0';
  const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
  const recipes = res.data.recipes;
  console.log(recipes);
}

getResults('pizza');

//https://www.food2fork.com/api/search