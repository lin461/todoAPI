var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;


// anytime a json request comes in, express gonna parse it 
// and we are able to access it, the req.body
app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send('TODO API ROOT');
});

// GET /todos 
app.get('/todos', function (req,res) {
	res.json(todos); // todos array will be converted into json and sent back to the caller
});

// GET /todos/:id
// ':id' is what Express uses to parse the data coming in

app.get('/todos/:id', function (req, res){

	// req.params.id type is string, need to be converted to int

	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;
	// interate over the todos array for the match
	for (var i = 0; i < todos.length; i++) {
		if(todos[i].id === todoId){
			matchedTodo = todos[i];
		}
	}

	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
	//res.send('Asking for todo with id of ' + req.params.id);
});

// POST /todos
app.post('/todos', function (req, res) {
	var body = req.body;
	//console.log('description: ' + body.description);

	// add id field
	body.id = todoNextId++;

	// push body into array
	todos.push(body);

	res.json(body);
});



app.listen(PORT, function(){
	console.log('Express listening on port: ' + PORT);
});