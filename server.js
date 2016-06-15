var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	completed: false
}, {
	id: 2,
	description: 'Go to market',
	completed: false
}, {
	id: 3,
	description: 'Workout',
	completed: true
}];



app.get('/', function (req, res) {
	res.send('TODO API ROOT');
});

app.get('/todos', function (req,res) {
	res.json(todos); // todos array will be converted into json and sent back to the caller
});

app.get('/todos/:id', function (req, res){
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

app.listen(PORT, function(){
	console.log('Express listening on port: ' + PORT);
});