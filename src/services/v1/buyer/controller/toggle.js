const { Buyer } = require("../../../../database");
const ErrorResponse = require("../../../../utilities/error/error.response");

module.exports = async (req, res, next) => {
    // Get Values
    try {
        if (!req.params.id) return next(new ErrorResponse("Invalid Request!", 400));

        const buyer = await Buyer.findByPk(req.params.id, {});

        if (!buyer) return next(new ErrorResponse("No buyer found!", 404));

        await buyer.update({
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
