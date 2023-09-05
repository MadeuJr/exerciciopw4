const express = require('express');
const app = express();
const port = 3002;
const homeRouter = require('./routers/homeRouter.js');
const alunoRouter = require('./routers/alunoRouter.js');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }))

app.use(homeRouter, alunoRouter);

app.get('*', function (req, res) {
    return res.status(404).send("not found");
})



// server start
app.listen(port, () => console.log(`Access: http://localhost:${port}`));
