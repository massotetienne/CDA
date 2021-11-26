/*
 * App.js
 ******************************/
const
  express = require('express'),
  app = express(),
  session = require('express-session'),
  mongoose = require('mongoose'),
  mongoStore = require('connect-mongo'),
  cookieParser = require('cookie-parser'),
  MongoStore = mongoStore(session),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  port = process.env.PORT || 3004
  

require('dotenv').config()

app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.header('origin'))
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Cors
app.use(cors({
 
}))

// app.use
app.use(express.static('assets'))

// cookieParser should be above session
app.use(cookieParser())

// Express-session// Mongoose
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('Connecter a MongoDB'))
  .catch(err => console.log(err))

app.use(session({
  secret: 'securite',
  name: 'orinfa',
  secure: false,
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: true,
    maxAge: 60000
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}))

// Body-Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// ROUTER
const ROUTER = require('./Controllers/routeur')
app.use(ROUTER)

// Page Err 404
// app.use((req, res) => {
//   res.send('err404')
// })

// Ecoute de notre app
app.listen(port, () => {
  console.log('le serveur tourne sur le port: ' + port)
})