// *** main dependencies *** //
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// *** routes *** //
import routes from './routes/index';

// *** config file *** //
import { dev } from './config';

// *** express instance *** //
const app = express();

// *** mongoose *** //
mongoose.connect(dev);

mongoose.connection.on('error', () => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', () => {
    console.log('Successfully connected to the database');
});

// *** config middleware *** //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// *** main routes *** //
app.use('/', routes);

// *** server config *** //
app.listen(3000, () => {
    console.log('Node server running on http://localhost:3000');
});

module.exports = app;
