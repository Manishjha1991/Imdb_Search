
const app = require('./app')
/*** Routes ******/
app.use('/',require('./routes/index.js'));

/*** for testing**/
module.exports = app;
