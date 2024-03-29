const sequelize = require('../database')
const Rating = require('../models/Rating')

module.exports = {
  async insert(req, res) {
    try {
      const { id_usuario, id_jogo } = req.params
      const { id_jogo_categoria, comentario,data_avaliacao, nota } = req.body

      const rating = await Rating.create({
        id_usuario,
        id_jogo,
        id_jogo_categoria,
        data_avaliacao,
        comentario,
        nota
      })

      return res.json(rating)
    } catch (err) {
      console.log(err)
    }
  },

  async getAll(req, res) {
    try {
      const ratings = await Rating.findAll({
        include: {
          association: 'usuario',
          attributes: ['username']
        }
      })

      return res.json(ratings)
    } catch (err) {
      console.log(err)
    }
  },

  async getGameRatings(req, res) {
    try {
      const { id_jogo } = req.params
      const ratings = await Rating.findAll({
        where: {
          id_jogo
        },
        include: {
          association: 'usuario',
          attributes: ['username']
        }
      })

      return res.json(ratings)

    } catch (err) {
      console.log(err)
    }
  },

  async update(req, res) {
    try {
      const { id_usuario, id_jogo } = req.params
      const { comentario, nota } = req.body
      
      const newRating = await Rating.update({
        comentario,
        nota
      }, {
        where: {
          id_usuario,
          id_jogo
        }
      })

      return res.json({ messege: 'Avaliação alterada' })
    } catch (err) {
      console.log(err)
    }
  },

  async getRecommendation(req, res) {
    try {
      const { id_usuario } = req.params

      const [recommendations, metadata] = await sequelize.query(`select * from recomendacoes('${id_usuario}')`)

      return res.json(recommendations)
    } catch (err) {
      console.log(err)
    }
  }
}
