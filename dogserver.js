const axios = require('axios');
const express = require('express')

const parseDogBreedsData = require('./parseDogBreedsData')

const app = express()

async function getDogBreedsData() {
  try {
    const response = await axios.get(`https://dog.ceo/api/breeds/list/all`);
    return response.data.message
  } catch(e) {
    console.error(e)
  }
}

app.get('/breeds', (req, res) => {
  getDogBreedsData().then((data) => res.json(parseDogBreedsData(data)))
})

module.exports = app