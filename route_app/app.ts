import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as cors from 'cors';

import config from '../config/config';
import setRoutes from './routes';

const app = express();
//set the port
app.set('port', (process.env.PORT || 3001));

app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({limit: '1gb'}));

app.use(bodyParser.urlencoded( {limit: '1gb',extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));
//mongoose connetion
mongoose.connect(config.db_practice);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
   console.log('Connected to MongoDB');

   setRoutes(app);


   app.listen(app.get('port'), () => {
       console.log('server listening on port ' + app.get('port'));
   });

});

export { app }