const { Testimonials } = require("../../../../database");
const ErrorResponse = require("../../../../utilities/error/error.response");

module.exports = async (req, res, next) => {
    // Get Values
    try {
        if (!req.params.id) return next(new ErrorResponse("Invalid Request!", 400));

        const testimonialId = req.params.id;

        // Delete the project from the database
        const deletedTestimonialCount = await Testimonials.destroy({
            where: {
                id: testimonialId
            }
        });

        if (deletedTestimonialCount === 0) {
            return res.status(404).json({
                error: 'Testimonial not found'
            });
        }

        // Return a success message
        res.status(200).json({
            success: true,
            message: 'Testimonial deleted successfully',
        });
        // On Error
    } catch (error) {
        // Send Error Response
        next(error);
    }
};
