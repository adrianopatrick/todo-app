/**
 * Created by ichigo on 28/02/17.
 */
const server = require('./config/server');
require('./config/database');
require('./config/routes')(server);