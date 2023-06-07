const { Banner } = require("../../../../database");

module.exports = async (req, res, next) => {
	// Get Values

	try {
		if (!req.file.filename)
			return next(new ErrorResponse("No attachment found!", 404));

		await Banner.create({
			filename: req.file.filename,
		});

		res.status(201).json({
			success: true,
			message: `Attachment uploaded successfully`,
		});
		// On Error
	} catch (error) {
		// Send Error Response
		next(error);
	}
};
