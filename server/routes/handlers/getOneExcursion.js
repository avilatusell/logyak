var ExcursionModel = require("../../models/Excursion");

function getOneExcursion (req,res) {
	var excursionId = req.params.id;
	ExcursionModel
		.findOne({id: excursionId})
		.populate( 'attendees' )
		.exec(function(err, excursion) {
			if (err) {
				return console.error(err);
			}
			res.json(excursion);
		});
};

module.exports = getOneExcursion;