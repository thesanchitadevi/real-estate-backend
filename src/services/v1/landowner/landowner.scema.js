const paginationPostMiddleware = require("../../../utilities/pagination/pagination.post.middleware");
const paginationPreMiddleware = require("../../../utilities/pagination/pagination.pre.middleware");

module.exports = {
  create: require("./controller/create"),
  getAll: [
    paginationPreMiddleware,
    require("./controller/findAll"),
    paginationPostMiddleware,
  ],
  markAsRead: require("./controller/toggle")
};
