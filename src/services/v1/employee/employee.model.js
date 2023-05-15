module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        designation: {
            type: Sequelize.STRING,
            allowNull: false,
            default: null,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            default: null,
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false,
            default: null,
        },
        rank: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },

    });

    return Employee;
};