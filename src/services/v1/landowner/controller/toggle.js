const { Landowner } = require("../../../../database");
const ErrorResponse = require("../../../../utilities/error/error.response");

module.exports = async (req, res, next) => {
    // Get Values
    try {
        if (!req.params.id) return next(new ErrorResponse("Invalid Request!", 400));

        const landowner = await Landowner.findByPk(req.params.id, {});

        if (!landowner) return next(new ErrorResponse("No landowner found!", 404));

        await landowner.update({
            isRead: true
        });

        res.status(200).json({
            success: true,
            message: "Information marked as read",
        });
        // On Error
    } catch (error) {
        // Send Error Response
        next(error);
    }
};
