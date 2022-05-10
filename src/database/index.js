const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Category = require('../models/Category')
const Game = require('../models/Game')

const connection = new Sequelize(dbConfig)

Category.init(connection)
Game.init(connection)

Game.associate(connection.models)

module.exports = connection
