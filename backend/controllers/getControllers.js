const user = require('../user.json')

const GetAllContacts = (req, res) => {
    res.json(user)
}

module.exports = {
    GetAllContacts
}