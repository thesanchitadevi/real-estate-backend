const { Buyer } = require("../../../../database");

module.exports = async (req, res, next) => {
  // Get Values
  try {
    const {
        buyerName,
        buyerEmail,
        buyerProfession,
        phoneNumber,
        handoverDate,
        orientation,
        preferredLocation,
        preferredSize,
        preferredFloor,
        attractiveFeature,
        numberofBathroom,
        numberofBedroom,
        parkingSize,
    } = req.body;

    await Buyer.create({
      buyerName,
      buyerEmail,
      buyerProfession,
      phoneNumber,
      handoverDate,
      orientation,
      preferredLocation,
      preferredSize,
      preferredFloor,
      attractiveFeature,
      numberofBathroom,
      numberofBedroom,
      parkingSize,

      createdById: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: `${buyerName} is added as a new buyer successfully`,
    });
    // On Error
  } catch (error) {
    // Send Error Response
    next(error);
  }
};
