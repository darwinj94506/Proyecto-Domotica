const { app, BrowserWindow } = require('electron')
var restify = require('restify');
// UDP
var PORT = 33333;
var HOST = '192.168.137.227';

var dgram = require('dgram');
var message = new Buffer('Soy Byron!');
// FIN UDP

var server = restify.createServer({
  name: 'localhost',
  version: '1.0.0'
});
var io = require('socket.io')(server);


// UDP
var client = dgram.createSocket('udp4');
// client.on('listening', function () {
//     var address = client.address();
//     console.log('UDP Cliente listening on ' + address.address + ":" + address.port);
    
// });
// client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
//     if (err) throw err;
//     console.log('UDP message sent to ' + HOST +':'+ PORT);    
// });

// client.on('message', function (message, remote) {
//     console.log(remote.address + ':' + remote.port +' - ' + message);
//     client.close();
// });
//FIN UDP





// SOCKETS IO
io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('new message', (data) => {

    // we tell the client to execute 'new message'
 //UPD 
 client.on('listening', function () {
  var address = client.address();
  console.log('UDP Cliente listening on ' + address.address + ":" + address.port);
  
});
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
  if (err) throw err;
  console.log('UDP message sent to ' + HOST +':'+ PORT);    
});
// UDP
    socket.broadcast.emit('alarma', {

      username: "Byron",

      message: "Alarma Activada"

  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
    

  socket.on('add-message', (message) => {
    io.emit('message', {type:'new-message', text: message});    
  });
});
});
// FIN SOCKETS IO

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser({
  mapParams: true
}));
server.use(restify.plugins.bodyParser({
  mapParams: true
}));




function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 600, 
    height: 600,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`
  })


  win.loadURL(`file://${__dirname}/dist/index.html`)

  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})



server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
