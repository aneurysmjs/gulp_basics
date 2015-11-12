// server.js (Express 4.0)
var express        = require('express'),
    morgan         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    cors           = require('cors'),
    app            = express();

//app.use(express.static(__dirname + './public')); // set the static files location /public/img will be /img for users
app.use(express.static('public'));
app.use(morgan('dev')); 					         // log every request to the console
//app.use(bodyParser());
app.use(bodyParser.urlencoded({                 // pull information from html in POST
   extended: true
}));
app.use(methodOverride()); 					      // simulate DELETE and PUT
app.use(cors());                                // enable CORS

app.all('/*', function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Jero says", "Fuck you!!");
   next();
});

app.get('/assets/bigJSON', function (req, res) {
   //res.send('sisa');
   res.sendFile(__dirname + '/public/assets/bigJSON.json');
});

var frameworks = [
      {id: 1, name: 'Angular', company: 'Google'},
      {id: 2, name: 'Falcor',  company: 'Netflix'},
      {id: 3, name: 'React',   company: 'Facebook'},
      {id: 4, name: 'RxJs',    company: 'Microsoft'}
    ],
    lastId = frameworks.length + 1;

app.get('/frameworks', function (req, res) {
   res.send(frameworks);
});

app.post('/framework', function (req, res) {

   var framework = req.body;
   console.log('--- req.body--- ');
   console.log(req.body);

   framework.id = lastId;
   lastId++;
   frameworks.push(framework);
   res.send(framework);

   console.log('--- framework--- ');
   console.log(framework);
});

app.post('/framework/:id/done', function (req, res) {
   var frameworkId = req.params.id,
       framework = null;
   for (var i = 0; i < frameworks.length; i++) {
      if (frameworks[i].id == req.params.id) {
         framework = frameworks[i];
         break;
      }
   }
   framework.name = 'Done - ' + framework.name;
   res.send(frameworks);
});

app.get('/framework/:id', function (req, res) {
   for (var i = 0; i < frameworks.length; i++) {
      if (frameworks[i].id == req.params.id) {
         res.send(frameworks[i]);
         break;
      }
   }
   res.send({msg: 'Note not found'}, 404);
});

app.post('/framework/:id', function (req, res) {
   for (var i = 0; i < frameworks.length; i++) {
      if (frameworks[i].id == req.params.id) {
         frameworks[i] = req.body;
         frameworks[i].id = req.params.id;
         res.send(frameworks[i]);
         break;
      }
   }
   res.send({msg: 'Note not found'}, 404);
});

app.get('/', function (req, res) {
   res.render('index', {});
});

var PORT = 1989;
app.listen(PORT);

console.log('Open http://localhost:' + PORT + ' to access the files right now');