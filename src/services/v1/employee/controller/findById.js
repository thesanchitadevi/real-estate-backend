
const { Employee } = require("../../../../database");
const ErrorResponse = require("../../../../utilities/error/error.response");

module.exports = async (req, res, next) => {
    // Get Values
    try {
        if (!req.params.id) return next(new ErrorResponse("Invalid Request!", 400));

        const employee = await Employee.findByPk(req.params.id, {
            attributes: {
                exclude: ["createdById", "updatedById"],
            },
            include: [
                {
                    association: "createdBy",
                    attributes: {
                        exclude: ["password", "createdAt", "updatedAt", "email"],
                    },
                },
                {
                    association: "updatedBy",
                    attributes: {
                        exclude: ["password", "createdAt", "updatedAt", "email"],
                    },
                },
            ],
        });

        if (!employee) return next(new ErrorResponse("No project found!", 404));

        res.status(200).json({
            success: true,
            message: "Informations fetched sucessfully",
            data: employee,
        });
        // On Error
    } catch (error) {
        // Send Error Response
        next(error);
    }
};
