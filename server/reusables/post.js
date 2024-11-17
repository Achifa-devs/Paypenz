const { register_user } = require("../controllers/auth");
const { 
    express, 
    parser
 } = require("../reusables/modules");
let user_route = express.Router();  

user_route.post('/registration', parser, register_user);
user_route.post('/login', parser, signin_user);

module.exports={
    user_route
}
