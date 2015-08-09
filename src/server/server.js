import express from 'express';
import React from 'react';
import Router from 'react-router';
import routes from '../routes';

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'jade');
app.use(express.static('public'));
app.use(express.static('src/assets'));

app.get('/*', (req, res) => {
    Router.run(routes, req.url, Handler => {
        res.render('index', {
            content: React.renderToString(<Handler />)
        });
    });
});

var server = app.listen(8080, () => {
    var { host, port } = server.address();
    console.log(`Listening on ${port}...`);
});
