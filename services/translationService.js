const axios = require('axios');
require('dotenv').config();

const getTranslation = async (sentence)=>{
  console.log("Fetching Real Translation")
  return await axios.get(`${process.env.URL}${sentence}`)
}

module.exports = getTranslation;