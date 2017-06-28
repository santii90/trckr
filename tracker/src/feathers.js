import rest from 'feathers-rest/client'
const jQuery = require('jquery')
// Include and set up feathers client
const Feathers = require('feathers/client')
const hooks = require('feathers-hooks')
const authentication = require('feathers-authentication-client')
// const socketio = require('feathers-socketio/client')
// const io = require('socket.io-client')
// const socket = io(finalHost)
var host = 'http://localhost:3000'

if (process.env.NODE_ENV === 'production') {
  host = 'http://138.197.91.189'
}

const feathers = Feathers()
  // .configure(rest('http://localhost:3000').jquery(jQuery))
  .configure(rest(host).jquery(jQuery))
  .configure(hooks())
  .configure(authentication({
    storage: window.localStorage
  }))

// Add services
feathers.service('match')

export default feathers
