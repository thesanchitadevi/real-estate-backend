const { adminAuthorized } = require("../../../authentication");
const paginationPostMiddleware = require("../../../utilities/pagination/pagination.post.middleware");
const paginationPreMiddleware = require("../../../utilities/pagination/pagination.pre.middleware");
const { upload } = require("../../../utilities/upload/upload.pre.middleware");

module.exports = {
    create: [adminAuthorized, require("./controller/create")],
    getAll: [
        paginationPreMiddleware,
        require("./controller/findAll"),
        paginationPostMiddleware,
    ],
    getById: require("./controller/findById"),
    updateInformation: [
        adminAuthorized,
        require("./controller/update"),
    ],
    deleteById: [adminAuthorized, require("./controller/delete")],
    // Banner
    getBanners: [
        require("./controller/getBannerImages"),
    ],
    uploadBanner: [
        adminAuthorized,
        upload.single("File"),
        require("./controller/uploadBannerImage"),
    ],
    deleteBanner: [adminAuthorized, require("./controller/deleteBannerImage")],
};