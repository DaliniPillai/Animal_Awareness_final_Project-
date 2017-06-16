/* setting up express */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

/* setting up port & listen */
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

/*setting up cors*/

/* setting static file */
app.use('/static', express.static(path.join(__dirname, 'public')));
/* setting up cors */
app.use(cors());
/* setting up logger */
app.use(logger('dev'));
/* setting up body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* setting routes */
/* ====================== INDEX ROUTE ========= */
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

/*importing the petFinderHelper function for the search view */
const petFinderHelpers = require('./services/petFinder/petFinderHelpers'); 
/*animal and stories routes route*/
const animalsRoutes = require('./routes/animalsRoutes');
app.use('/animals', animalRoutes);

const stories = require('./routes/storiesRoutes');
app.use('/stories', storiesRoutes);







/* handling 404 */
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});