const { Op } = require("sequelize");
const { Employee, Sequelize } = require("../../../../database");

module.exports = async (req, _res, next) => {
    // Get Values

    //const employees = await Employee.findAll({
    // order: [['rank', 'DESC']],
    // });
    try {
        req.data = await Employee.findAndCountAll({
            where: {
                [Op.or]: [
                    {
                        firstName: {
                            [Op.like]: `%${req.search}%`,
                        },
                    },
                    {
                        lastName: {
                            [Op.like]: `%${req.search}%`,
                        },
                    },
                ],
                isActive: true
            },
    
            attributes: {
                // include: [
                //     [
                //         Sequelize.literal(`(
                //         SELECT COUNT(*)
                //         FROM employees AS employee
                //         )`),
                //         'rank'
                //     ]
                // ],
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
