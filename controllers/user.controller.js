const User = require('../models/user.model');
const people = require('../assets/people.json');

class UserController{
    get(req,res){
        const filter = req.query.filter;
        // console.log('filter',filter);
        const coutPeople = people.filter(nguoi =>nguoi.first_name.includes('a'));
        return res.json(coutPeople);
    }




}
module.exports = new UserController();