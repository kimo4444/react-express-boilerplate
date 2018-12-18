const express = require('express');
const app =  express();
const path  = require('path');
const publicPath = path.join(__dirname, '.', 'public');
const robots = require('express-robots');
app.use(robots(__dirname + '/robots.txt'));
const helmet = require('helmet');
const bodyParser = require('body-parser');
const  compression = require('compression');

app.use(compression())
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());

app.use(express.static(publicPath));


app.get('*', (req,res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});


app.listen(process.env.PORT || 3000, () => {
  console.log('Running on port 3000');
});
