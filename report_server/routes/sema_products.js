const express = require('express');
const router = express.Router();
const semaLog = require('../seama_services/sema_logger');
const bodyParser = require('body-parser');
const Product = require('../model_layer/Product');

var sqlQuery = "SELECT * FROM product WHERE updated_date > ?";


router.get('/', function(req, res) {
	semaLog.info('customers - Enter');


	//let results = initResults();
	req.check("updated-date", "Parameter updated-date is missing").exists();

	console.log("LOG - updated-date: " + req.query['updated-date']);

	req.getValidationResult().then(function(result) {
		if (!result.isEmpty()) {
			const errors = result.array().map((elem) => {
				return elem.msg;
			});
			semaLog.error("updated-date VALIDATION ERROR: ", errors);
			res.status(400).send(errors.toString());
		}
		else {
			getProducts(sqlQuery, req.query["updated-date"], res);
		}
	});

});


const getProducts = (query, params, res ) => {
	return new Promise((resolve, reject) => {
		__pool.getConnection((err, connection) => {

			connection.query(query, params, function(err, result) {
				connection.release();

				if (err) {
					semaLog.error('products - failed', { err });
					res.status(500).send(err.message);
					reject(err);
				}
				else {
					semaLog.info('products - succeeded');
					try {
						if (Array.isArray(result) && result.length >= 1) {

							var values = result.map(item => {
								product = new Product(item);
								return product.classToPlain(item);
							});

							//let m = new Product(result);
							resolve(res.json({ products: values}));
						} else {
							resolve(res.json({ products: [] }));
						}

					} catch (err) {
						semaLog.error('products - failed', { err });
						res.status(500).send(err.message);
						reject(err);
					}
				}
			});

		})
	});
}


module.exports = router;
