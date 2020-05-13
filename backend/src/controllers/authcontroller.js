const worker = require('../database/devSchema')

module.exports = {
    async index(request, response) {
        const {email, senha} = request.body;
    
        const user = await worker.findOne( { email } ). select('+senha');
    
        if(!user){
            return response.status(400).send( {erro: 'Usuario não encontrado'} );
        }
    
        if(await user.senha !== senha){
            return response.status(400).send( {error: 'Invalid password'} );
        }
    
        user.senha = undefined;
    
        response.json(user.id)
    },

    async register(request, response){
        const {nome, email, senha, cidade, desc, skills, whatsapp} = request.body;
    
        if(await worker.findOne({email})){
            return response.status(400).send( {error: 'email já cadastrado'} );
        }
    
        freelancer = await worker.create({
            nome,
            email,
            senha,
            cidade,
            desc,
            skills,
            whatsapp
        });
    
        freelancer.senha = undefined;
    
    
        response.json(freelancer.id);
    },

    async workers(request, response){
        const cidade = request.body;
    
        const freelancers = await worker.find().where(cidade).select('+ nome + email + desc + skills + whatsapp');
    
    
        response.json(freelancers)
    }
}