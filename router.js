'use strict'

exports = module.exports = (app) => {
	app.post('/api/mailer', require('./routes/mailer.js'))
}