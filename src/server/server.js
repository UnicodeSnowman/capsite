import express from 'express';
import router from './router';

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'jade');
app.use(express.static('public'));
app.use(express.static('src/assets'));
app.use(router);

var server = app.listen(8080, () => {
    var { host, port } = server.address();
    console.log(`Listening on ${port}...`);
});
