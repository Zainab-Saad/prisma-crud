const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const usersRouter = require('./routes/users');
const housesRouter = require('./routes/houses');

const PORT = 3005;

const app = express();

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use('/house', housesRouter);
app.use(usersRouter);
const server = http.createServer(app);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})