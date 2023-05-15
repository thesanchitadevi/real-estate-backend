const { Employee } = require("../../../../database");
const ErrorResponse = require("../../../../utilities/error/error.response");

module.exports = async (req, res, next) => {
    // Get Values
    try {
        if (!req.params.id) return next(new ErrorResponse("Invalid Request!", 400));
        
        const {
            firstName,
            lastName,
            designation,
            description,
            image,
            rank
        } = req.body;

        const employee = await Employee.findByPk(req.params.id, {});

        if (!employee) return next(new ErrorResponse("No employee found!", 404));

        await employee.update({
            firstName,
            lastName,
            designation,
            description,
            image,
            rank,
            updatedById: req.user.id,
        });

        res.status(200).json({
            success: true,
            message: "Informations updated sucessfully",
        });
        // On Error
    } catch (error) {
        // Send Error Response
        next(error);
    }
};
