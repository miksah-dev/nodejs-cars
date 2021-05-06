module.exports = (sequelize, Sequelize) => {
  const Car = sequelize.define("Car", {
    brand: {
      type: Sequelize.STRING
    },
    model: {
      type: Sequelize.STRING
    },
    modelyear: {
      type: Sequelize.INTEGER
    },
    color: {
        type: Sequelize.STRING
      },
    fuel: {
        type: Sequelize.STRING
      },
    chassis: {
        type: Sequelize.STRING
      },
    doors: {
        type: Sequelize.INTEGER
      }
  });
  return Car;
};