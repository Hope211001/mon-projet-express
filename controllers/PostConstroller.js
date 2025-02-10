const { Poste } = require('../models')

class PosteController {
    async store(req, res) {
       const post = await Poste.create(req.body)
       return res.json({status:201, data:post})
    }

    async all(req, res){
        const posts = await Poste.findAll()
        return res.json({status:200, data:posts})
    }
}

module.exports = new PosteController()