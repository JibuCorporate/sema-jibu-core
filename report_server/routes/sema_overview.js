const express = require('express');
const router = express.Router();
const semaLog = require('../seama_services/sema_logger');

const list = require('./products/list');
const list_user = require('./users/list');
const list_franchise = require('./kiosk/list');


router.get('/', async (req, res, next) => {
    semaLog.info('GET kiosks - Enter');
    return Promise.all(
        [list_user.listNoQuery(),
        list.listAllProducts(),
        list_franchise.listAllDropDown()]
    ).then(values => {
        return res.json({
            users: values[0].total,
            products: values[1].total,
            franchises: values[2].total
        });
    });

});


function handleError(res, statusCode, message) {
    return (error) => {
        return res.status(statusCode).json({ message: message || error.message });
    };
}


module.exports = router;
