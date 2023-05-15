const { Projects } = require("../../../../database");

module.exports = async (req, res, next) => {
    // Get Values
    try {
        const {
            projectName,
            types,
            status,
            orientation,
            architect,
            image,
            address,
            landSize,
            numberUnits,
            apartmentSize,
            numberFloors,
            numberParkings,
            handOverDate
        } = req.body;

        await Projects.create({
            projectName,
            types,
            status,
            orientation,
            architect,
            image,
            address,
            landSize,
            numberUnits,
            apartmentSize,
            numberFloors,
            numberParkings,
            handOverDate,
            createdById: req.user.id,
        });


        res.status(201).json({
            success: true,
            message: `${projectName} is added as a new project successfully`,
        });
        // On Error
    } catch (error) {
        // Send Error Response
        next(error);
    }
};
