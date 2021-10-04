const { default: axios } = require("axios");

// export default NewsApiWrapper ({
//     newsApiKey: process.env.NEWS_API_KEY;
// })(newsContainer)

//api key hidden for small safety measure
const newsAPIKey = process.env.NEWS_API_KEY;
const jobs = require('./db.json');

//const for safety
const query = "climate";

module.exports = {
    getArticles: (req, response) => {
        axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${newsAPIKey}`)
        .then(function (res) {
            let articles = res.data.articles
            //want to see what response looks like
            // console.log(articles)
            //send response back
            response.status(200).send(articles);
            //have frontend create loop and sort data to view

            //need error code 
            if (res == null || res == 'undefined') {
                res.sendStatus(404);
            };
        });
    },
    getCurrentJobs: (req, res) => {
        res.status(200).send(jobs);
        if (res == null || res == 'undefined') {
            res.sendStatus(400);
    }
}


// https://newsapi.org/docs/endpoints/everything

// module.exports = {
//     getHouses: (req, res) => {
//         res.status(200).send(houses);
//     },
//     deleteHouse: (req, res) => {
//         const {id} = req.params
//         let index = houses.findIndex(elem => elem.id === +id)
//         houses.splice(index, 1)
//         res.status(200).send(houses)
//     },