const { Op } = require("sequelize");
const { Buyer } = require("../../../../database");

module.exports = async (req, _res, next) => {
    // Get Values

    try {
        req.data = await Buyer.findAndCountAll({
            where: {
                [Op.or]: [
                    {
                        buyerName: {
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
