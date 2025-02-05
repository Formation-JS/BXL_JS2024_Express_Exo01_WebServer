import chalk from 'chalk';
import express from 'express';
import morgan from 'morgan';

//! Configuration du web serveur
const app = express();

//! App Middleware
app.use(morgan('tiny'));

//! Routing
app.get('/', (req, res) => {
    res.status(200).send('<html><body><h1>Hello World</h1></body></html>')
});

//! Demarrage du web serveur
app.listen(8080, function () {
    console.log(chalk.cyanBright(`Web server is running on port ${8080}`));
});