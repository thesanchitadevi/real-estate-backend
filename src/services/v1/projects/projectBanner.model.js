
module.exports = (sequelize, Sequelize) => {
    const projectBanner = sequelize.define("projectBanner", {
        filename: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        // projectId: {
        //     type: Sequelize.INTEGER,
        //     references: {
        //         model: Project,
        //         key: 'id'
        //     }
        // }
    });

    return projectBanner;
};