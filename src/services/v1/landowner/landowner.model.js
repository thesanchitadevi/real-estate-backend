module.exports = (sequelize, Sequelize) => {
    const Landowner = sequelize.define("landowner", {
        landownerName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        landownerEmail: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        alterLandownerName: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        locality: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        fullAddress: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        landSize: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        width:  {                         //front road
            type: Sequelize.STRING,
            allowNull: true,
        },
        category: {
            type: Sequelize.ENUM,
            allowNull: true,
            values: ['Freehold','Leasehold']
        },
        attractiveFeature: {
            type: Sequelize.ENUM,
            allowNull: true,
            values: ['Lakeside','Cornerplot','Mainroad','Parkview','Others']
        },
        facing: {
            type: Sequelize.ENUM,
            allowNull: true,
            values: ['East','West','North','South']
        },
    });

    return Landowner;
};