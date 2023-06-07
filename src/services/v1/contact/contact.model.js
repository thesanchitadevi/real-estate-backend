module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
        contactName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        Email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        message: {
            type: Sequelize.STRING,
            allowNull: true,
        },

    });

    return Contact;
};