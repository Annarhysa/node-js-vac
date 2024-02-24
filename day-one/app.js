const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let n1 = Number(req.query.sum1); //also can use parseFloat
  let n2 = Number(req.query.sum2);
  let opp = (req.query.opp);
  switch(opp) {
    case 'add':
      result = n1 + n2;
      res.send(`${n1} + ${n2} = <hr><strong>${result}</strong>`);
      break;
    case 'sub':
      result = n1 - n2;
      res.send(`${n1} - ${n2} = <hr><strong>${result}</strong>`);
      break;
    case 'mul':
      result = n1 * n2;
      res.send(`${n1} * ${n2} = <hr><strong>${result}</strong>`);
      break;
    case 'div':
      result = n1 / n2;
      res.send(`${n1} / ${n2} = <hr><strong>${result}</strong>`);
      break;
    default:
      result = 'Invalid operator';
      res.send(`<strong>${result}<\strong>`);
  }
});

app.get('/myroute', (req, res) => {
  res.send('More Hellos to you')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})