const express = require("express")
const axios = require("axios")
const path = require("path")
const cors = require('cors');
//link controller
const controller = require('./controller.js');

//telling server to load dotenv
require('dotenv').config()

//create server object
const app = express()


app.use(express.static(path.join(__dirname, "../client")));


app.use(express.json());
app.use(cors());

app.get('/api/articles', controller.getArticles); 
app.get('/api/currentjobs', controller.getCurrentJobs);
app.post('/api/addjob', controller.createJob);
// app.post('/api/houses', controller.createHouse);
// app.put('/api/houses/:id', controller.updateHouse);
// app.delete('/api/houses/:id', controller.deleteHouse);

// app.get("/api/sad", (req, res) => {
//     const sad= ["Sorry you feel that way :("];
//     res.status(200).send(sad);
//   });
  
//   app.get("/api/angry", (req, res) => {
//     const angry= ["Take some deep breaths"];
//     res.status(200).send(angry);
//   });

const port = process.env.PORT || 4400

app.listen(port, () => {
    console.log(`ahoy matey: ${port}`)
})