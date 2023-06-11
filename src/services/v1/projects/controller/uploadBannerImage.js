const {  ProjectBanner } = require("../../../../database");

module.exports = async (req, res, next) => {
	// Get Values

	try {
		if (!req.file.filename)
			return next(new ErrorResponse("No attachment found!", 404));

		await ProjectBanner.create({
			filename: req.file.filename,
			projectId: req.params.id,
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
