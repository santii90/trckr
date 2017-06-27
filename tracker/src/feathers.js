import rest from 'feathers-rest/client'
const jQuery = require('jquery')
// Include and set up feathers client
const Feathers = require('feathers/client')
const hooks = require('feathers-hooks')
const authentication = require('feathers-authentication-client')
// const socketio = require('feathers-socketio/client')
// const io = require('socket.io-client')
// const socket = io(finalHost)
console.log('trying to connect')
const feathers = Feathers()
.configure(rest('localhost:3000').jquery(jQuery))
.configure(hooks())
.configure(authentication({storage: window.localStorage}))

// Add services
feathers.service('match')

export default feathers
