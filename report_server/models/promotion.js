/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('promotion', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		amount: {
			type: DataTypes.DECIMAL(19,2),
			allowNull: false,
		},
		applies_to: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		base64encoded_image: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		start_date: {
			type: DataTypes.DATE,
			allowNull: false
		},
		end_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		product_id: {
			type: DataTypes.BIGINT,
			allowNull: true,
			references: {
				model: 'product',
				key: 'id'
			}
		},
		region_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'region',
				key: 'id'
			}
		},
		kiosk_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'kiosk',
				key: 'id'
			}
		},
		sku: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
	}, {
		tableName: 'promotion',
		timestamps: false,
		underscored: true
	});
};
