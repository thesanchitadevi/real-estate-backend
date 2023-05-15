const { Employee } = require("../../../../database");
const ErrorResponse = require("../../../../utilities/error/error.response");

module.exports = async (req, res, next) => {
    // Get Values
    try {
        if (!req.params.id) return next(new ErrorResponse("Invalid Request!", 400));

        const employeeId = req.params.id;

        // Delete the project from the database
        const deletedEmployeeCount = await Employee.destroy({
            where: {
                id: employeeId 
            }
        });

        if (deletedEmployeeCount === 0) {
            return res.status(404).json({
                error: 'Employee not found'
            });
        }

        // Return a success message
        res.status(200).json({
            success: true,
            message: 'Employee deleted successfully',
        });
        // On Error
    } catch (error) {
        // Send Error Response
        next(error);
    }
};
