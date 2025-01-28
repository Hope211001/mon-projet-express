const { Personnel } = require('../models')

class PersonnelController {
    async all(req, res) {
        const personnel = await Personnel.findAll();
        console.log(personnel.every(personnel => personnel instanceof Personnel)); // true
        console.log('All personnel:', JSON.stringify(users, null, 2));
    }
}

module.exports = new PersonnelController()