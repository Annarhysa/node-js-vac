const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
const port = 3000

const {connection} = require("./db/db_config");

app.get('/', (req, res) => {
  //let lang = req.query.lang
  let movie = req.query.term
  connection.query(`SELECT * FROM movie_table WHERE title LIKE ?`,
    [`${movie}%`],
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