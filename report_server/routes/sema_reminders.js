const express = require('express');
const router = express.Router();
const semaLog = require('../seama_services/sema_logger');
const ReminderData = require('../model_layer/ReminderData');
const bodyParser = require('body-parser');
const moment = require('moment');
router.use(bodyParser.urlencoded({ extended: false }));

let sqlReminderData =
	'select distinct * from reminder_details where reminder_date=? and kiosk_id=?';

router.get('/', function(req, res) {
	semaLog.info('GET Reminders - Enter');

	req.check('site-id', 'Parameter site-id is missing').exists();

	req.getValidationResult().then(function(result) {
		if (!result.isEmpty()) {
			const errors = result.array().map(elem => {
				return elem.msg;
			});
			semaLog.error('GET Reminder data validation error: ', errors);
			res.status(400).send(errors.toString());
		} else {
			let todayDate = moment(new Date())
				.format('YYYY-MM-DD');

			semaLog.info('today_date: ' + todayDate);
			if (isNaN(todayDate)) {
				getReminderData(
					sqlReminderData,
					[todayDate, req.query['site-id']],
					res
				);
			} else {
				semaLog.error('GET Reminder Details - Invalid today_date');
				res.status(400).send('Invalid Date');
			}
		}
	});
});

const getReminderData = (query, params, response) => {
	return new Promise((resolve, reject) => {
		__pool.getConnection((err, connection) => {
			connection.query(query, params, (err, result) => {
				connection.release();
				if (err) {
					semaLog.error('GET Reminder Details- Failed==> ', { err });
					res.status(500).send(
						'Failed in the sql query ' + err.message
					);
					reject(err);
				} else {
					semaLog.info('GET Reminder Details SUCCEEDED');
					try {
						if (Array.isArray(result) && result.length >= 1) {
							var reminders = result.map(item => {
								//semaLog.info(item);
								var reminder = new ReminderData(item);
								semaLog.info(
									'Returned from db ==>' +
										item +
										'--> ' +
										reminder['reminder_date']
								);
								semaLog.info(
									'THE AMOUNT DUE ' + reminder['amountDue']
								);
								return reminder;
							});
							//semaLog.info("Total ==>"+reminders.reminder_date);
							resolve(
								response.json({ reminderDetails: reminders })
							);
						} else {
							resolve(response.json({ reminderDetails: [] }));
						}
					} catch (err) {
						semaLog.error('GET ReminderDetails -failed', { err });
						response.status(500).send(err.message);
						reject(err);
					}
				}
			});
		});
	});
};

module.exports = router;
