const { Op } = require("sequelize");
const { Testimonials } = require("../../../../database");

module.exports = async (req, _res, next) => {
    // Get Values

    try {
        req.data = await Testimonials.findAndCountAll({
            where: {
                [Op.or]: [
                    {
                        testimonial: {
                            [Op.like]: `%${req.search}%`,
                        },
                    },
                ],
            },
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
            order: req.pagination.order(),
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
