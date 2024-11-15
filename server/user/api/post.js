const { 
    express, 
    parser 
} = require("../../modules");
const { 
    register_user 
} = require("../controllers/post");


let user_route = express.Router();  

user_route.post('/system.signup', parser, register_user);

module.exports ={
    user_route
}