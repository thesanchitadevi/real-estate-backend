const { Image: Banner } = require("../../../../database");

module.exports = async (req, _res, next) => {
	// Get Values

	try {
		req.data = await Banner.findAndCountAll({});

		next();

		// On Error
	} catch (error) {
		// Send Error Response
		next(error);
	}
};