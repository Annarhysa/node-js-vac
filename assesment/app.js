const express = require('express')

const app = express()
const port = 3000

const {connection} = require("./db/db_config");
const {connection2} = require("./db/db_config2");

// Question 2
app.get('/getSorted', (req, res) => {
    let order = Number(req.query.order)
    if (order == 1) {
        connection.query(`SELECT * FROM movie_table ORDER BY release_year ASC;`,
      //[`${order}`],
        (err, results)=>{
          if(err){
            console.log( `Error in query!`);
            res.send("Error in DB query");
          }
          else{
            console.log(results);
            res.send(results)};
        })
      }

    else if(order == 0) {
    connection.query(`SELECT * FROM movie_table ORDER BY release_year DESC;`,
      //[`${order}`],
        (err, results)=>{
          if(err){
            console.log( `Error in query!`);
            res.send("Error in DB query");
          }
          else{
            console.log(results);
            res.send(results)};
        })}
  });

app.get('/getLatest', (req, res) => {
    let order = req.query.order
    connection.query(`SELECT * FROM movie_table ORDER BY release_year DESC LIMIT 1;`,
      //[`${order}`],
        (err, results)=>{
          if(err){
            console.log( `Error in query!`);
            res.send("Error in DB query");
          }
          else{
            console.log(results);
            res.send(results)};
        })
})

app.get('/getOldest', (req, res) => {
    let order = req.query.order
    connection.query(`SELECT * FROM movie_table ORDER BY release_year ASC LIMIT 1;`,
      //[`${order}`],
        (err, results)=>{
          if(err){
            console.log( `Error in query!`);
            res.send("Error in DB query");
          }
          else{
            console.log(results);
            res.send(results)};
        })
})


// Question 3
app.get('/getTopper', (req, res) => {
    let order = req.query.order
    connection2.query(`SELECT * FROM STUDENT_DATA WHERE Marks = (SELECT MAX(Marks) FROM STUDENT_DATA);`,
      //[`${order}`],
        (err, results)=>{
          if(err){
            console.log( `Error in query!`);
            res.send("Error in DB query");
          }
          else{
            console.log(results);
            res.send(results)};
        })
})

app.get('/getFailedList', (req, res) => {
    let order = req.query.order
    connection2.query(`SELECT * FROM STUDENT_DATA WHERE MARKS < 80;`,
      //[`${order}`],
        (err, results)=>{
          if(err){
            console.log( `Error in query!`);
            res.send("Error in DB query");
          }
          else{
            console.log(results);
            res.send(results)};
        })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})