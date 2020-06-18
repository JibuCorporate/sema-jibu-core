const bcrypt = require('bcrypt');

module.exports = models => {
	// Will execute everytime a user gets created or modified and the password has been changed
	models.user.beforeSave(async (user, options) => {
		if (!user.changed('password')) return;

		try {
			// TODO: bcrypt not playing nice with env variable
			let hash = await bcrypt.hash(user.password, 10);
			user.password = hash;
		} catch (err) {
			console.error(err);
		}
	});

	// Instance level method: to use when comparing passwords on user login
	models.user.prototype.comparePassword = function (pw) {
		return bcrypt.compareSync(pw, this.password);
	};

	// We override the default toJSON so we NEVER send the password
	// to the client
	models.user.prototype.toJSON = async function () {
		var values = Object.assign({}, this.get());
		delete values.password;
		let role = await this.getRoles();
		const kioskUsers = await models.kiosk_user.findOne({
			where: { user_id: values.id }
		});
		let kiosk = []
		if (kioskUsers) {
			ki = kioskUsers.toJSON();
			kiosk = await models.kiosk.findAll({
				where: { id: ki.kiosk_id }
			});
		}
		return {
			id: values.id,
			email: values.email,
			username: values.username,
			firstName: values.first_name,
			lastName: values.last_name,
			active: values.active,
			kiosk: kiosk.length === 0 ? 'N/A' : kiosk[0].id,
			role: role.map(r => ({ id: r.id, code: r.code, authority: r.authority }))
		};
	};


	models.franchise.prototype.toJSON = async function () {
		var values = Object.assign({}, this.get());
		const kiosk = await models.kiosk.findOne({
			where: { id: values.kiosk_id }
		});
		return {
			...values,
			name: values.name + ' ' + values.code,
			id: values.kiosk_id,
			created_at: kiosk.created_at,
			updated_at: kiosk.updated_at,
			region_id: kiosk.region_id,
		};
	};

	models.product.prototype.toJSON = async function () {
		const values = Object.assign({}, this.get());
		const category = await this.getProduct_category();
		const productMrp = await models.product_mrp.findAll({
			where: { product_id: values.id }
		});

		return {
			id: values.id,
			productId: values.id,
			active: !!values.active,
			name: values.name,
			sku: values.sku,
			description: values.description,
			category: category.id,
			priceAmount: values.price_amount,
			priceCurrency: values.price_currency,
			minQuantity: values.minimum_quantity,
			maxQuantity: values.maximum_quantity,
			unitsPerProduct: values.unit_per_product,
			unitMeasurement: values.unit_measure,
			costOfGoods: values.cogs_amount,
			created_at: values.created_at,
			updated_at: values.updated_at,
			wastageName: values.wastage_name,
			base64Image: values.base64encoded_image
			// productMrp: productMrp.map(p => ({
			// 	id: p.id,
			// 	active: p.active,
			// 	kioskId: p.kiosk_id,
			// 	priceAmount: p.price_amount,
			// 	priceCurrency: p.price_currency,
			// 	productId: p.product_id,
			// 	salesChannelId: p.sales_channel_id,
			// 	costOfGoods: p.cogs_amount
			// }))
		};
	};

	models.product_mrp.toJSON = async function () {
		const values = Object.assign({}, this.get());
		return {
			id: values.id,
			kioskId: values.kiosk_id,
			priceAmount: values.price_amount,
			priceCurrency: values.price_currency,
			productId: values.product_id,
			salesChannelId: values.sales_channel_id,
			costOfGoods: values.cogs_amount
		};
	};
};
