/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	const receipt_payment_type = sequelize.define('receipt_payment_type', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		receipt_id: {
			type: DataTypes.STRING,
			allowNull: false,
			references: {
				model: 'receipt',
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
		receipt_payment_type_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		payment_type_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'payment_type',
				key: 'id'
			}
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '1'
		},
		amount: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
	}, {
		tableName: 'receipt_payment_type',
		timestamps: false,
		underscored: true
	});

	return receipt_payment_type;
};
