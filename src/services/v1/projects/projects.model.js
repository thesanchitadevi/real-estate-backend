module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("projects", {
        projectName: {
            type: Sequelize.STRING,
            default: null,
        },
        types: {
            type: Sequelize.ENUM,
            allowNull: false,
            values: ['construction', 'residential']
        },
        status: {
            type: Sequelize.ENUM,
            allowNull: false,
            values: ['ongoing', 'upcoming', 'completed']
        },
        orientation: {
            type: Sequelize.ENUM,
            allowNull: false,
            values: ['north', 'south', 'east', 'west']
        },
        architect: {
            type: Sequelize.STRING,
            allowNull: false,
            default: null,
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
            default: null,
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false,
            default: null,
        },
        area: {
            type: Sequelize.STRING,
            allowNull: false,
            default: null,
        },
        landSize: {
            type: Sequelize.STRING,
            allowNull: false,
            default: null,
        },
        numberUnits: {
            type: Sequelize.INTEGER,
            allowNull: false,
            default: null,
        },
        apartmentSize: {
            type: Sequelize.STRING,
            allowNull: false,
            default: null,
        },
        numberFloors: {
            type: Sequelize.INTEGER,
            allowNull: false,
            default: null,
        },
        numberParkings: {
            type: Sequelize.INTEGER,
            allowNull: false,
            default: null,
        },
        handOverDate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            default: null,
        },
    });

    return Project;
};