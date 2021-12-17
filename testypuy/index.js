


const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors()); 

app.use(express.static('public'));





app.get("/",(req,res)=>{

    res.send("shipping manager running");
  });

  const port = 8080;
  
  app.listen(port, () => 
{
    console.log('Running on port ' + port);
});
