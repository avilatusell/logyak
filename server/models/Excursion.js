var mongoose = require('mongoose');
var excursionDef = require('./schemas/excursion');

var ExcursionSchema = new mongoose.Schema(excursionDef);

var ExcursionModel = mongoose.model("excursion", ExcursionSchema);

module.exports = ExcursionModel;

