const { Op } = require("sequelize");
const { Contact } = require("../../../../database");

module.exports = async (req, _res, next) => {
    // Get Values

    try {
        req.data = await Contact.findAndCountAll({
            where: {
                [Op.or]: [
                    {
                        contactName: {
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
