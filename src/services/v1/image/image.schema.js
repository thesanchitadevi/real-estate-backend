const { adminAuthorized } = require("../../../authentication");
const paginationPostMiddleware = require("../../../utilities/pagination/pagination.post.middleware");
const paginationPreMiddleware = require("../../../utilities/pagination/pagination.pre.middleware");
const { upload } = require("../../../utilities/upload/upload.pre.middleware");

module.exports = {
  getBanner: [
    paginationPreMiddleware,
    require("./controller/getBannerImage"),
    paginationPostMiddleware,
  ],
  uploadBanner: [
    adminAuthorized,
    upload.single("File"),
    require("./controller/uploadBannerImage"),
  ],
  deleteBanner: [adminAuthorized, require("./controller/deleteBannerImage")],
};
