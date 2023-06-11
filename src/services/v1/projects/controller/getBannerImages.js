const { ProjectBanner } = require("../../../../database");

module.exports = async (req, res, next) => {
	// Get Values

	try {

		res.json({
			data: await ProjectBanner.findAll({
				projectId: req.params.id,
			}),
			success: true,
			message: "Banner gets successfully.",
		})


		// On Error
	} catch (error) {
		// Send Error Response
		next(error);
	}
};
