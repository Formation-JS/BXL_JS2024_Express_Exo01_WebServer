import chalk from 'chalk';
import express from 'express';
import morgan from 'morgan';

//! Configuration du web serveur
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

//! App Middleware
//  - Logger
app.use(morgan('tiny'));

//  - Custom middleware for render (inject layout)
app.use((req, res, next) => {
    res.originalRender = res.render;

    res.render = (view, data) => {
        res.originalRender('_layout', { view, data });
    };

    next();
});

//! Routing
app.get('/', (req, res) => {
    res.status(200).render('home/index', { example: 'La valeur est 42' });
});

//! Demarrage du web serveur
app.listen(8080, function () {
    console.log(chalk.cyanBright(`Web server is running on port ${8080}`));
});