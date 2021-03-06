class ReminderData {
	constructor(dbresponse) {
		this._customer_name = dbresponse['customer_name'];
		this._frquency = dbresponse['frequency'];
		this._address = dbresponse['address_line1'];
		this._phone_number = dbresponse['phone_number'];
		this._amount_cash = dbresponse['amount_cash'];
		this._product_name = dbresponse['product_name'];
		this._total = dbresponse['total'];
		this._reminder_date = dbresponse['reminder_date'];
		this._kiosk_id = dbresponse['kiosk_id'];
		this.sales_channel_id = dbresponse['sales_channel_id'];
		this.customerId = dbresponse['customer_id'];
		this.amountDue = dbresponse['due_amount'];
		this.kiosk_id = dbresponse['kiosk_id'];
		this.receipt = dbresponse['receipt_created_on'];
		this.customerTypeId = dbresponse['customer_type_id'];

		return {
			name: this._customer_name,
			kiosk_id: this._kiosk_id,
			frequency: this._frquency,
			address: this._address,
			phoneNumber: this._phone_number,
			amount_cash: this._amount_cash,
			dueAmount: this.amountDue,
			product_name: this._product_name,
			total: this._total,
			salesChannelId: this.sales_channel_id,
			customerTypeId: this.customerTypeId,
			customerId: this.customerId,
			receipt: this.receipt,
			reminder_date: this._reminder_date
		};
	}
}

module.exports = ReminderData;
