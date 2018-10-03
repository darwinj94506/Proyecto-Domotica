var child_process=require('child_process');
var exec=child_process.exec;
var fork=child_process.fork;

const { app, BrowserWindow } = require('electron')




function conexionDispositivosUDP(comando)
{
  var child=exec('java -jar ./HDL_UDP_Socket.jar '+comando,(error,stdout,stderr)=>{
    console.log('Output->'+stdout);
    if(error !== null)
    {
        console.log("error->"+error);
    }else{
        console.log("Sin error");
    }
  });

  module.exports=child;
}

// SOCKETS IO
var spLecturaDisp=fork("lecturaDisp.js");
var io = require('socket.io').listen(3000);
console.log('Server is listening on port 3000...');
io.sockets.on('connection',function(client){
  console.log('Conectado');

  //Escanear dispositivo
  spLecturaDisp.send({msg:"lectura_continua"});
  
  
  client.on('disconnect',()=>
  {
      console.log("Desconectado");
      //Matar proceso
      spLecturaDisp.kill(0);
  });

  
  client.on('message',(message)=>
  {
    console.log("Comando recibido:"+message);
    conexionDispositivosUDP(message);   
  }); 
});
// FIN SOCKETS IO

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




// UDP CONEXION CON DISPOSITIVOS









//statuslight
//(1) => numero de canales del dispositivo (Eneste caso 4)
//(>2 hasta 5)=>  Estado de los canales (0-100)
//
