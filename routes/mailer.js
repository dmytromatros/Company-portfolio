'use strict';
// const nodemailer = require('nodemailer')

module.exports = async (req, res) => {
	try {

		// const transporter = nodemailer.createTransport({
		// 	service: 'gmail',
		// 	auth: {
		// 		user: "it.from.heart@gmail.com",
		// 		pass: "lupp wsqw yvtv gpoq"
		// 	}
		// })


		// const mailOptions = {
		// 	from: req.body.email,
		// 	to: 'it.from.heart@gmail.com',
		// 	subject: `Name: ${req.body.name} , Email : ${req.body.email}`,
		// 	text: req.body.text
		// }

		// transporter.sendMail(mailOptions)


		res.status(200).json({
			message: 'Your message has been sent!',
			success: true
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ 
			message: 'Something went wrong...',
			success: true 
		});
	}
};






