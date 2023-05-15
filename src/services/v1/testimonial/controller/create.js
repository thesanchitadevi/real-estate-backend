const { Testimonials } = require("../../../../database");

module.exports = async (req, res, next) => {
    // Get Values
    try {
        const {
            firstName,
            lastName,
            testimonial
        } = req.body;

        await Testimonials.create({
            firstName,
            lastName,
            testimonial,
            createdById: req.user.id,
        });

        res.status(201).json({
            success: true,
            message: "Testimonial added successfully",
        });
        // On Error
    } catch (error) {
        // Send Error Response
        next(error);
    }
};
