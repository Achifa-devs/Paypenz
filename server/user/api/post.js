const { 
    express, 
    parser 
} = require("../../reusables/modules");
const { register_user } = require("../controllers/auth");
const { update_pin } = require("../controllers/post");

let user_route = express.Router();  

user_route.post('/system.signup', parser, register_user);
user_route.post('/system.pin-set-up', parser, update_pin);

module.exports ={
    user_route
}