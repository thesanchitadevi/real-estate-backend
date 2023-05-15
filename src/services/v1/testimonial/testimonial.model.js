module.exports = (sequelize, Sequelize) => {
    const Testimonial = sequelize.define("testimonials", {
        firstName: {
            type: Sequelize.STRING,
            default: null,
        },
        lastName: {
            type: Sequelize.STRING,
            default: null,
        },
        testimonial: {
            type: Sequelize.STRING,
            allowNull: false,
            default: null,
        }
        
    });

    return Testimonial;
};