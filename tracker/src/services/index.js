// THIS FILE IS NOT VEING USED, FEATHERS.JS AND ROUTER.JS DO THE CONF
// /services/index.js
import feathers from 'feathers/client'
const hooks = require('feathers-hooks')
const authentication = require('feathers-authentication-client')
import socketio from 'feathers-socketio/client'
import io from 'socket.io-client'

const socket = io('http://localhost:3030')

export const app = feathers()
.configure(socketio(socket))
.configure(hooks())
.configure(authentication({storage: window.localStorage}))
// repeat this line for every service in our backend
export const match = app.service('match')
