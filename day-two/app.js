const express = require('express')
const app = express()
const port = 3000

const {connection} = require("./db/db_config");

app.get('/', (req, res) => {
  let lang = req.query.lang
  let movie = req.query.movie
  connection.query(`SELECT * FROM movie_data WHERE title LIKE ? AND language = ? `,
    [`${movie}%`,lang],
      (err, results)=>{
        if(err){
          console.log( `Error in query!`);
          res.send("Error in DB query");
        }
        else{
          console.log(results);
          res.send(results)};
      })
  });

app.get('/delete', (req, res) => {
  let id = req.query.id
  connection.query(`DELETE FROM MOVIE_DATA WHERE ID=${id}`, (err, results)=>{
    if(err){
      console.log( `Error in query!`);
      res.send("Error in DB query");
    }
    else{
      console.log(results);
      res.send(results);};
    })
  });

app.get('/myroute', (req, res) => {
  res.send('More Hellos to you')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})