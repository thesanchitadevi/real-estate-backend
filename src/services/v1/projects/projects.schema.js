const { adminAuthorized } = require("../../../authentication");
// const paginationMiddleware = require("../../../utilities/pagination/pagination.pre.middleware");
// const paginationPostMiddleware = require("../../../utilities/pagination/pagination.post.middleware");

module.exports = {
    create: [adminAuthorized, require("./controller/create")],
};