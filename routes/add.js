var data = require("../data.json");

exports.addFriend = function(request, response) {    
	var friendData = {
		name: request.query.name,
		description: request.query.description,
		imageURL: "http://lorempixel.com/400/400/people"
	};

	console.log(friendData);

	data.friends.push(friendData);

	response.render('index', data);
 }