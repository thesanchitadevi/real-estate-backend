const { Banner } = require("../../../../database");

module.exports = async (req, res, next) => {
	try {
		const banner = await Banner.findByPk(req.params.id);

		if (banner) {
			banner.destroy();
		} else {
			return next(new ErrorResponse("No banner image found!", 404));
		}

		res.status(200).json({
			success: true,
			message: "Image deleted successfully!",
		});
	} catch (error) {
		// Send Error Response
		next(error);
	}
};
