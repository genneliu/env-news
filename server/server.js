const express = require("express")
const axios = require("axios")
const path = require("path")

//create server object
const app = express()


app.use(express.static(path.join(__dirname)));
app.use("/styles.css", express.static(__dirname + "/styles.css"));
app.use("/main.js", express.static(__dirname + "/index.js"));

//link controller
const controller = require('./controller.js');

//responding to paths with respective file
app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, "../client/index.html"))
})

app.get('/script.js', (req, res) => {
res.sendFile(path.join(__dirname, '../client/script.js'))
})

app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/styles.css'))
    })

// app.get('/script.js', (req, res) => {
//     res.sendFile(path.join(__dirname, '/script.js'))
//     })

app.get('/api/articles', controller.getArticles); 
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