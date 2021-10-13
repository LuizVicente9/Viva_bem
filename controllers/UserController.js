const { Usuario } = require('../models')

const UserController = {
    index: (req, res)=> {
        let users = await Usuario.findAll();

        return res.render('usuarios', {users})
    }
}

module.exports = UserController