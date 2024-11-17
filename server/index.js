const { 
  express,
  path,
  fs,
  parser,
  mocha,
  morgan,
  cors,
  shortId,
  jwt,
  io
} = require('./reusables/modules');

const {
  // NeonDB,
  neon_db
} = require('./reusables/db');

const cookieParser = require('cookie-parser');
const greetingTime = require("greeting-time");

const { 
  default: axios 
} = require('axios');
const { 
  user_route 
} = require('./user/api/post');

   
greetingTime(new Date());
require('dotenv').config(); 

const app = express(); 
app.use(cookieParser());
app.use(morgan('dev'));  

app.use(cors({
  origin: '*',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE', 'UPDATE'],
  credentials: true,
  optionsSuccessStatus: 200
})); 

app.use(user_route)
 
var server = app.listen(process.env.PORT,_ => console.log('app is live @',process.env.PORT));
io(server, {cors: {origin: '*'}}).on('connection',(socket) => {
  
  socket.on('getTime', () => {
    socket.emit('greetings', greetingTime(new Date()))
  })



  socket.on('emailCheck', (email) => {
    NeonDB.then((pool) => 
      pool.query(`SELECt * FROM campus_sellers WHERE email = '${email}'`)
      .then(result => socket.emit('emailCheck', result.rows.length > 0 ? false : true))
      .catch(err => {
        socket.emit('emailCheck', false)
        console.log(err)
      })
    )
    .catch(err => console.log(err))
  })

  

});
 




process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', reason.stack || reason)
  // Recommended: send the information to sentry.io
  // or whatever crash reporting service you use  
});
