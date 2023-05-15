const Sequelize = require("sequelize");
const { DB } = require("./configuration");

const Connection = new Sequelize(DB);

const db = {
	Sequelize,
	Connection,
};

// Import Database to a base exports
db.Users = require("./services/v1/users/users.model")(Connection, Sequelize);
db.Admin = require("./services/v1/admin/admin.model")(Connection, Sequelize);
db.Projects = require("./services/v1/projects/projects.model")(Connection, Sequelize);
db.Testimonials = require("./services/v1/testimonial/testimonial.model")(Connection, Sequelize);

// Relation Ships

// - Projects
db.Projects.belongsTo(db.Admin, { as: "createdBy" });
db.Projects.belongsTo(db.Admin, { as: "updatedBy" });

// - Testimonials
db.Testimonials.belongsTo(db.Admin, { as: "createdBy" });
db.Testimonials.belongsTo(db.Admin, { as: "updatedBy" });

module.exports = db;
