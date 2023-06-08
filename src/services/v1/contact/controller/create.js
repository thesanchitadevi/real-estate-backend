const { Contact } = require("../../../../database");

module.exports = async (req, res, next) => {
  // Get Values
  try {
    const {
      contactName,
      Email,
      phoneNumber,
      message,
    } = req.body;

    await Contact.create({
        contactName,
        Email,
        phoneNumber,
        message,

      createdById: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: `${contactName} is added as a new contact successfully`,
    });
    // On Error
  } catch (error) {
    // Send Error Response
    next(error);
  }
};
