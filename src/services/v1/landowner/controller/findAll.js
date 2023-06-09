const { Op } = require("sequelize");
const { Landowner } = require("../../../../database");

module.exports = async (req, _res, next) => {
    // Get Values

    try {
        req.data = await Landowner.findAndCountAll({
            where: {
                [Op.or]: [
                    {
                        landownerName: {
                            [Op.like]: `%${req.search}%`,
                        },
                    },
                ],
            },
            offset: req.pagination.skip,
            limit: req.pagination.limit,
        });

        next();

        // On Error
    } catch (error) {
        // Send Error Response
        next(error);
    }
};