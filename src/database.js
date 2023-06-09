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
db.Projects = require("./services/v1/projects/projects.model")(
  Connection,
  Sequelize
);
db.Testimonials = require("./services/v1/testimonial/testimonial.model")(
  Connection,
  Sequelize
);
db.Employee = require("./services/v1/employee/employee.model")(
  Connection,
  Sequelize
);
db.Landowner = require("./services/v1/landowner/landowner.model")(
  Connection,
  Sequelize
);
db.Image = require("./services/v1/image/image.model")(
  Connection, 
  Sequelize
);
db.Buyer = require("./services/v1/buyer/buyer.model")(
  Connection, 
  Sequelize
);
db.Contact = require("./services/v1/contact/contact.model")(
  Connection,
  Sequelize
);


// Relation Ships

// - Projects
db.Projects.belongsTo(db.Admin, { as: "createdBy" });
db.Projects.belongsTo(db.Admin, { as: "updatedBy" });

// - Testimonials
db.Testimonials.belongsTo(db.Admin, { as: "createdBy" });
db.Testimonials.belongsTo(db.Admin, { as: "updatedBy" });

// - Employee
db.Employee.belongsTo(db.Admin, { as: "createdBy" });
db.Employee.belongsTo(db.Admin, { as: "updatedBy" });

// - Image
db.Image.belongsTo(db.Admin, { as: "createdBy" });
db.Image.belongsTo(db.Admin, { as: "updatedBy" });



module.exports = db;
