module.exports = (sequelize, Sequelize) => {
	const Banner = sequelize.define("banner", {
		filename: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	});

	return Banner;
};
