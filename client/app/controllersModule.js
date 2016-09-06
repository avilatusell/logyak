var ExcursionDetailsCtrl = require("./details/controller");
var DeleteExcursionCtrl  = require("./delete/controller");
var ExcursionEditCtrl    = require("./edit/controller");
var ExcursionsListCtrl   = require("./list/controller");
var CreateExcursionCtrl  = require("./create/controller");

var KayakersListCtrl     = require("./listKayakers/controller");
var KayakerDetailsCtrl   = require("./detailsKayaker/controller");
var KayakerEditCtrl      = require("./editKayaker/controller");
var CreateKayakerCtrl    = require("./createKayaker/controller");

var QuoteController      = require ("./quotes/controller");


angular.module('logyakControllers',[])

	.controller("ExcursionDetailsCtrl", ExcursionDetailsCtrl)
	.controller("DeleteExcursionCtrl",  DeleteExcursionCtrl)
	.controller("ExcursionEditCtrl",    ExcursionEditCtrl)
	.controller("ExcursionsListCtrl",   ExcursionsListCtrl)
	.controller("CreateExcursionCtrl",  CreateExcursionCtrl)

	.controller("KayakersListCtrl",     KayakersListCtrl)
	.controller("KayakerDetailsCtrl",   KayakerDetailsCtrl)
	.controller("KayakerEditCtrl",      KayakerEditCtrl)
	.controller("CreateKayakerCtrl",    CreateKayakerCtrl)

	.controller("QuoteController",      QuoteController)



module.exports = "logyakControllers";

