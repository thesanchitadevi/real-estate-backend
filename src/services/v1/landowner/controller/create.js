const { Landowner } = require("../../../../database");

module.exports = async (req, res, next) => {
    // Get Values
    try {
        const {
            landownerName,
            landownerEmail,
            phoneNumber,
            alterLandownerName,
            locality,
            fullAddress,
            landSize,
            width,
            category,
            attractiveFeature,
            facing,
        } = req.body;

        await Landowner.create({
            landownerName,
            landownerEmail,
            phoneNumber,
            alterLandownerName,
            locality,
            fullAddress,
            landSize,
            width,
            category,
            attractiveFeature,
            facing,
        });


        res.status(201).json({
            success: true,
            message: `${landownerName} is added as a new landowner successfully`,
        });
        // On Error
    } catch (error) {
        // Send Error Response
        next(error);
    }
};