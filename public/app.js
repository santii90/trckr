const socket = io();
const client = feathers();
client.configure(feathers.hooks());

// Create the Feathers application with a `socketio` connection
client.configure(feathers.socketio(socket));

// Get the service for our `messages` endpoint
const match = client.service('match');

// Log when anyone creates a new message in real-time!

function addMessage(match) {
  const chat = document.querySelector('.matches');

  chat.insertAdjacentHTML('beforeend', `<ul> Formation: ${match.formation} Score: ${match.ownScore} - ${match.rivalScore} </ul>`);

  chat.scrollTop = chat.scrollHeight - chat.clientHeight;
}

// Create a test message


match.on('created', addMessage);

refreshMatches();


document.getElementById('add-match').addEventListener('submit', function (ev) {
  const formation = document.querySelector('[name="formation"]').value;
  // This is the message text input field
  const ownScore = document.querySelector('[name="ownScore"]').value;
  const rivalScore = document.querySelector('[name="rivalScore"]').value;

  // Create a new message and then clear the input field
  match.create({
    formation,
    ownScore,
    rivalScore
  });
  refreshMatches();
  ev.preventDefault();
});

function refreshMatches() {
  const matches = document.querySelector('.matches').innerHTML = '';
  const selection = document.getElementById("filter");
  const sel = selection[selection.selectedIndex].value
  if (sel === 'All') {
    console.log('ALL');
    match.find().then(page => page.data.forEach(addMessage));
  } else {
    console.log('ELSE', sel);
    const query = {
      formation: sel
    };
    match.find({
      query
    }).then(page => page.data.forEach(addMessage));
  }
}

document.getElementById('filter').addEventListener('change', function (ev) {
    refreshMatches();
});
