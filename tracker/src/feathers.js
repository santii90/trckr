import rest from 'feathers-rest/client'
const jQuery = require('jquery')
// Include and set up feathers client
const Feathers = require('feathers/client')
const hooks = require('feathers-hooks')
const authentication = require('feathers-authentication-client')
// const socketio = require('feathers-socketio/client')
// const io = require('socket.io-client')
var port = process.env.PORT || 3030
var host = location.origin.replace(/^http/, 'ws')
var finalHost = host + ':' + port
console.log(process.env.PORT + '   ' + process.env.HOST)
console.log(finalHost)
// const socket = io(finalHost)

const feathers = Feathers()
.configure(rest(finalHost).jquery(jQuery))
.configure(hooks())
.configure(authentication({storage: window.localStorage}))

// Add services
feathers.service('match')

export default feathers
