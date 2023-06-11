module.exports = (sequelize, Sequelize) => {
  const Buyer = sequelize.define("buyer", {
    buyerName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    buyerEmail: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    buyerProfession: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    handoverDate: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    orientation: {
      type: Sequelize.ENUM,
      allowNull: true,
      values: ["East", "West", "North", "South"]
    },
    preferredLocation: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    preferredSize: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    preferredFloor: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    numberofBathroom: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    numberofBedroom: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    parkingSize: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    attractiveFeature: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    isRead: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  });    //mailing address ki daoai lagbe?

  return Buyer;
};
