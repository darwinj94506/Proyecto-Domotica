var child_process=require('child_process');
var exec=child_process.exec;
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

  return child;
}


process.on("message",(msg)=>{
    setInterval(()=>{
        conexionDispositivosUDP("leer");
    },1000)    
})


