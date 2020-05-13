const mongoose = require('mongoose');

const workerschema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    cidade: String,
    desc: String,
    skills: String,
    whatsapp: String
})

module.exports = mongoose.model('worker', workerschema)