var ExcursionModel = require("../../models/Excursion");

function getAllExcursions (req,res) {
	ExcursionModel
		.find({})
		.populate('attendees', 'name surname')
		.sort({date: -1})
		.exec(function(err, excursions) {
			if (err) return console.error(err);
			res.json(excursions);
		});

};

module.exports = getAllExcursions;