import React from 'react';
import Router from 'react-router';
import routes from '../routes';
import express from 'express';
import { Client as Discogs } from 'disconnect';

var router = express.Router();

router.get('/api/records', (req, res, next) => {
    var collection = new Discogs({ userToken: 'MY_TOKEN' }).user().collection();
    collection.releases('caplingerc', 0, { page: 1 }, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(data);
        }
    })
});

router.get('/*', (req, res) => {
    Router.run(routes, req.url, Handler => {
        res.render('index', {
            content: React.renderToString(<Handler />)
        });
    });
});

export default router;

