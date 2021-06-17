const express = require('express');
const cors = require('cors');


const Home = require('./controller/home.controller')



require('dotenv').config();
const app = express()
app.use(cors());


const PORT = process.env.PORT;

app.get('/', Home.homePage)

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});