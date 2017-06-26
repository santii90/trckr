// Include and set up feathers client
const Feathers = require('feathers/client')
const hooks = require('feathers-hooks')
const authentication = require('feathers-authentication-client')
const socketio = require('feathers-socketio/client')
const io = require('socket.io-client')
var port = process.env.PORT || 3030
var host = process.env.HOST || 'http://localhost'
const socket = io(host + ':' + port)
const feathers = Feathers()
.configure(socketio(socket))
.configure(hooks())
.configure(authentication({storage: window.localStorage}))

// Add services
feathers.service('match')

export default feathers
