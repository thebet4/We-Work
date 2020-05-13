//Encriptar senha no bd


const { Router } = require('express')
const authcontroller = require('./controllers/authcontroller')
const profilecontroller = require('./controllers/profilecontroller')

const routes = Router()

routes.post('/login',authcontroller.index);
routes.put('/register',authcontroller.register);
routes.post('/workers', authcontroller.workers); 

routes.put('/update', profilecontroller.update)

routes.delete('/delete', profilecontroller.delete)

routes.post('/profile', profilecontroller.profile);

module.exports = routes;