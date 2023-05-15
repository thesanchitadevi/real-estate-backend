const { Projects } = require("../../../../database");
const ErrorResponse = require("../../../../utilities/error/error.response");

module.exports = async (req, res, next) => {
    // Get Values
    try {
        if (!req.params.id) return next(new ErrorResponse("Invalid Request!", 400));
        
        const projectId = req.params.id;

        // Delete the project from the database
        const deletedProjectCount = await Projects.destroy({
            where: {
                id: projectId
            }
        });

        if (deletedProjectCount === 0) {
            return res.status(404).json({
                error: 'Project not found'
            });
        }

        // Return a success message
        res.status(200).json({
            success: true,
            message: 'Project deleted successfully',
        });
        // On Error
    } catch (error) {
        // Send Error Response
        next(error);
    }
};
