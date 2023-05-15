const { Projects } = require("../../../../database");
const ErrorResponse = require("../../../../utilities/error/error.response");

module.exports = async (req, res, next) => {
    // Get Values
    try {
        if (!req.params.id) return next(new ErrorResponse("Invalid Request!", 400));
        const { projectName,
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

        const project = await Projects.findByPk(req.params.id, {});

        if (!project) return next(new ErrorResponse("No project found!", 404));

        await project.update({
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
