const PORT = process.env.PORT || 8000const express = require('express')const cheerio = require('cheerio')const axios = require('axios')
const app = express()
const articales = []
app.get('/', (req,res)=> { res.json("Welcome to my Climate crisis API!")})
app.get('/news', (req,res)=> { axios.get('https://www.theguardian.com/environment/climate-crisis') .then((response)=>{
 const html = response.data const $ = cheerio.load(html) $('a:contains("climate")', html).each(function(){ const title = $(this).text() const url = $(this).attr('href') articales.push({title,url}) })
 res.json(articales)
 }).catch((err)=>console.log(err))})
app.listen(PORT, () => console.log("Server runing on PORT: "+PORT))