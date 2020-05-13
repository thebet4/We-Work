const worker = require('../database/devSchema')


module.exports = {
    async update(request, response) {
        const {id, cidade, desc, skills, whatsapp} = request.body;
        
        const freelancer = await worker.findById(id)
        freelancer.cidade = cidade;
        freelancer.desc = desc;
        freelancer.skills = skills;
        freelancer.whatsapp = whatsapp;

        await freelancer.save()
        response.json(freelancer)
    },

    async delete(request, response) {
        const _id = request.body
        await worker.deleteOne(_id)

        response.json({"deletado": _id})
    },

    async profile(request, response) {
        const id = request.body
        console.log(id)
        const freelancer = await worker.findById(id.id)
        freelancer.senha = undefined

        response.json(freelancer)
    }
}