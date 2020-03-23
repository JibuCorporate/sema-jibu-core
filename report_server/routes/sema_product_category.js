const request = require('supertest');
const expect = require('chai').expect;
const chai = require('chai');
const express = require('express');
const router = express.Router();
const semaLog = require('../seama_services/sema_logger');
const bodyParser = require('body-parser');
const Product = require('../model_layer/Product');

const list = require('./product_category/list');
const post = require('./products/post');

const findById = require('./product_category/find-by-id');

// Note that the query for updated products must include products recently deactivated as well
// as active products
var sqlQueryDate = "SELECT * FROM product WHERE updated_at > ? ";
// We're sending all products, whether active or not because we determine this
// on the client side
var sqlQuery = "SELECT * FROM product";

router.get('/', function(req, res) {
	semaLog.info('GET products - Enter');
	if (req.query.hasOwnProperty("updated-date")) {
		getProducts(sqlQueryDate, [getUTCDate(new Date( req.query["updated-date"]))], res);
	}
	else {
		getProducts(sqlQuery, [], res);
	}
});

const getProducts = (query, params, res ) => {
		__pool.getConnection((err, connection) => {

		connection.query(query, params, function(err, result) {
			connection.release();
			if (err) {
				semaLog.error('GET products - failed', { err });
				res.status(500).send(err.message);
			}
			else {
				semaLog.info('GET products - succeeded');
				try {
					if (Array.isArray(result) && result.length >= 1) {

						var values = result.map(item => {
							product = new Product(item);
							return product.classToPlain(item);
						});

						//let m = new Product(result);
						res.json({ products: values});
					} else {
						res.json({ products: [] });
					}

				} catch (err) {
					semaLog.error('GET products - failed', { err });
					res.status(500).send(err.message);
				}
			}
		});

	})
}
const getUTCDate = (date) => {
	return  new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
		date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());

};

router.get('/admin', async (req, res, next) => {
	semaLog.info('GET kiosks - Enter');
	list.listAll(req.query).then(({ data, total }) => {
		return res.json({ data, total });
	})
		.catch(next);
});

router.post('/admin', async (req, res, next) => {
	semaLog.info('POST kiosks - Enter');
	post.create(req.body).then(({ data, total }) => {
		return res.json({ data, total });
	})
		.catch(next);
}); 

router.get('/admin/:id', async (req, res, next) => {
	semaLog.info('GET kiosk - Enter');
	const id = parseInt(req.params.id);
	return findById.findByPk(id)
		.then(data => res.status(200).json({ data }))
		.catch(Sequelize.EmptyResultError, handleError(res, 404))
		.catch(next);
});

function handleError(res, statusCode, message) {
    return (error) => {
        return res.status(statusCode).json({ message: message || error.message });
    };
}


module.exports = router;
