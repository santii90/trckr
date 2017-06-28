import rest from 'feathers-rest/client'
// import socketio from 'feathers-socketio/client'
// import io from 'socket.io-client'
const jQuery = require('jquery')
// Include and set up feathers client
const Feathers = require('feathers/client')
const hooks = require('feathers-hooks')
const authentication = require('feathers-authentication-client')

var host = 'http://localhost:3000'

if (process.env.NODE_ENV === 'production') {
  host = 'http://138.197.91.189'
}

// const socket = io(socketHost)

const feathers = Feathers()
  // .configure(socketio(socket))
  .configure(rest(host).jquery(jQuery))
  .configure(hooks())
  .configure(authentication({
    storage: window.localStorage
  }))

// Add services
feathers.service('match')

export default feathers
