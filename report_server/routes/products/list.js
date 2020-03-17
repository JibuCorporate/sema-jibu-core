const models = require('../../models');
const list = require('./../utils/util');

async function listAll(query) {
    const options = list.buildQuery(query);
    let users = await models.product.findAndCountAll(options);
    let userData = await Promise.all(
        users.rows.map(async user => {
            user = await user.toJSON();
            return { ...user }
        })
    );
    return {
        data: userData,
        total: users.count
    }

}

exports.listAll = listAll;
