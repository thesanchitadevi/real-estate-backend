const { adminAuthorized } = require("../../../authentication");
const paginationPostMiddleware = require("../../../utilities/pagination/pagination.post.middleware");
const paginationPreMiddleware = require("../../../utilities/pagination/pagination.pre.middleware");

module.exports = {
    create: [adminAuthorized, require("./controller/create")],
    getAll: [
        paginationPreMiddleware,
        require("./controller/findAll"),
        paginationPostMiddleware,
    ],
    // getById: require("./controller/findById"),
    // updateInformation: [
    //     adminAuthorized,
    //     require("./controller/update"),
    // ],
    deleteById: [adminAuthorized, require("./controller/delete")],
};