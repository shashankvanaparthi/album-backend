module.exports = (sequelize, Sequelize) => {
    const Album = sequelize.define("album", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      isFavourite: {
        type: Sequelize.BOOLEAN,
        default:false,
      },
      isForSale:{
        type: Sequelize.BOOLEAN,
        default: false
      }
    })
    return Album;
  };
  