'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./portfolio'))
app.get('*',function(request, response) {
    response.sendFile('/portfolio.html'), {root: '.'})
});

app.listen(PORT, function(){
    console.log(`server up on ${PORT}`)
});

