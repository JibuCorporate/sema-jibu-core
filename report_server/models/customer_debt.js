/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const customer_debt= sequelize.define('customer_debt', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		customer_debt_id: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		customer_account_id: {
			type: DataTypes.STRING,
			allowNull: false,
			references: {
				model: 'customer_account',
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
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '1'
		},
        due_amount: {
			type: DataTypes.DECIMAL,
			allowNull: false,
		},
		receipt_id: {
			type: DataTypes.STRING(255),
			allowNull: true,
			references: {
				model: 'receipt',
				key: 'id'
			}
		},
		balance: {
			type: DataTypes.DECIMAL,
			allowNull: true,
		},
		notes: {
			type: DataTypes.STRING(255),
			allowNull: true,
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
		tableName: 'customer_debt',
		timestamps: false,
		underscored: true
	});

	return customer_debt;
};
