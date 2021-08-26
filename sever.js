const express= require('express');
const app = express();

app.get('/', (req, resp)=>{
  res.send('this is working')
})

app.listen(3000, ()=>{
  console.log('app is running')
})
