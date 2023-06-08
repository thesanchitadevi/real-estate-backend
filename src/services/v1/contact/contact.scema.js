const { adminAuthorized } = require("../../../authentication");
const paginationPostMiddleware = require("../../../utilities/pagination/pagination.post.middleware");
const paginationPreMiddleware = require("../../../utilities/pagination/pagination.pre.middleware");

module.exports = {
  create: [ require("./controller/create")],
  getAll: [
    adminAuthorized,
    paginationPreMiddleware,
    require("./controller/findAll"),
    paginationPostMiddleware,
  ],
};
