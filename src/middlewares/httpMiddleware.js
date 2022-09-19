const ErrorMessage = require("../entities/ErrorMessage");
const SuccessMessage = require("../entities/SuccessMessage");

exports.onRequest = function (req, res, next) {
	// random 0 ~ 10000
	const randomNumber = Math.floor(Math.random() * (10000 - 0 + 1) + 0);
	const idRequest = new Date().valueOf() + "_" + (randomNumber);
	req.idRequest = idRequest
	console.log("--------------------")
	console.log(" Receive Request ID " + req.idRequest)
	console.log(" URL ", req.body)
	console.log(" Params ", req.params)
	console.log(" Body ", req.body)
	console.log("--------------------")
	res.locals.result = res.locals.result || {};
	next();
}

exports.successMiddleware = function (req, res, next) {
	try {
		let msg = new SuccessMessage();
		msg.data = res.locals.result;
		msg.idRequest = req.idRequest;
		res.json(msg);
	} catch (err) {
		console.error(err);
		next(err);
	}
}

exports.errorMiddleware = function (err, req, res, next) {
	try {
		console.error("Error handle by 'ErrorMiddleware'");
		console.error(err);

		if (res.headersSent) {
			return next(err)
		} else {
			let msg = new ErrorMessage();

			// Prevent circular
			let s = JSON.stringify(err, Object.getOwnPropertyNames(err));
			const errorNotCircular = JSON.parse(s);

			// Get everything except stack
			const { stack, ...everyProperty } = errorNotCircular;
			msg.data = everyProperty;

			// Set id requiest
			msg.idRequest = req.idRequest;

			res.json(msg)
		}
	} catch (err) {
		console.error("Fatal Error in 'ErrorMiddleware'", err);
		next(err);
	}
}
