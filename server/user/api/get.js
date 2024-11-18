const { express } = require("../../reusables/modules");
const { get_user } = require("../controllers/get");


let user_route_get = express.Router();  

user_route_get.get('/system.user', get_user);

// user_route_get.get('/', );

module.exports ={ 
    user_route_get
}