module.exports = (sequelize, Sequelize) => {
	const Image = sequelize.define("image", {
		filename: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	});

	return Image;
};