const express = require('express')
const app = express()
const fs = require('fs');

app.use(express.static(__dirname + "/" , {index:"index.html"}));

app.use(express.static('dist'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))