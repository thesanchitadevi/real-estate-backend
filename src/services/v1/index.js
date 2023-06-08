const express = require("express");
const router = express.Router();

router.use(
  "/admin",
  require("./admin")
  // #swagger.tags = ['Admin']
);

router.use(
  "/authentication",
  require("./authentication")
  // #swagger.tags = ['Authentication']
);

router.use(
  "/users",
  require("./users")
  // #swagger.tags = ['Users']
);

router.use(
  "/projects",
  require("./projects")
  // #swagger.tags = ['Projects']
);

router.use(
  "/testimonials",
  require("./testimonial") //service folder
  // #swagger.tags = ['Testimonials']
);

router.use(
  "/employee",
  require("./employee") //service folder
  // #swagger.tags = ['Employee']
);

router.use(
  "/landowner",
  require("./landowner")
  // #swagger.tags = ['Landowner']
);

router.use(
  "/buyer",
  require("./buyer")
  // #swagger.tags = ['Buyer']
);

router.use(
  "/image",
  require("./image")
  // #swagger.tags = ['Image']
);

router.use(
  "/contact",
  require("./contact")
  // #swagger.tags = ['Contact']
);

module.exports = router;
