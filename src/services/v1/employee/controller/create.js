const { Employee } = require("../../../../database");


module.exports = async (req, res, next) => {
    // Get Values
    try {
        const {
            firstName,
            lastName,
            designation,
            description,
            image,
            rank
        } = req.body;

        await Employee.create({
            firstName,
            lastName,
            designation,
            description,
            image,
            rank,
            createdById: req.user.id,
        });

        res.status(201).json({
            success: true,
            message: `${firstName} ${lastName} added as an employee successfully`,
        });
        // On Error
    } catch (error) {
        // Send Error Response
        next(error);
    }
};