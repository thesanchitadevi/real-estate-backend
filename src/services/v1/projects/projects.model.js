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
            default: null,
        },
        // image: {
        //     type: Sequelize.STRING,
        //     default: null,
        // },
        address: {
            type: Sequelize.STRING,
            default: null,
        },
        landSize: {
            type: Sequelize.STRING,
            default: null,
        },
        numberUnits: {
            type: Sequelize.INTEGER,
            default: null,
        },
        apartmentSize: {
            type: Sequelize.STRING,
            default: null,
        },
        numberFloors: {
            type: Sequelize.INTEGER,
            default: null,
        },
        numberParkings: {
            type: Sequelize.INTEGER,
            default: null,
        },
        handOverDate: {
            type: Sequelize.DATEONLY,
            default: null,
        },
    });

    return Project;
};