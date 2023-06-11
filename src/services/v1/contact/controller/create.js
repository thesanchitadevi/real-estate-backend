const { Contact } = require("../../../../database");

module.exports = async (req, res, next) => {
  // Get Values
  try {
    const {
      contactName,
      email,
      phoneNumber,
      message,
    } = req.body;

    await Contact.create({
        contactName,
        email,
        phoneNumber,
        message,
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
