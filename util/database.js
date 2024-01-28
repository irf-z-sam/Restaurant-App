const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'irfan@786',{  //In the given code snippet, "nodejs" represents the name of the database you want to connect to using Sequelize.
    dialect:"mysql",
    host:"localhost"
});

module.exports = sequelize;