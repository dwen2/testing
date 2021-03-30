function scan() {
    const { exec } = require('child_process');
    //var execSync = require('exec-sync');
    exec('nmap 192.168.214.*', (err, stdout, stderr) => {   //replace the network range in the commandline
    if (err) {
       //some err occurred
       console.error(err)
    } else {
       // the *entire* stdout and stderr (buffered)
       console.log(`stdout: ${stdout}`);
       console.log(`stderr: ${stderr}`);
    }
    
    // require('./Initialization/init')();
    });     

    // var net = require('net'), Socket = net.Socket;

    // var checkPort = function(port, host, callback) {
    //     var socket = new Socket(), status = null;

    //     // Socket connection established, port is open
    //     socket.on('connect', function() {status = 'open';socket.end();});
    //     socket.setTimeout(1500);// If no response, assume port is not listening
    //     socket.on('timeout', function() {status = 'closed';socket.destroy();});
    //     socket.on('error', function(exception) {status = 'closed';});
    //     socket.on('close', function(exception) {callback(null, status,host,port);});

    //     socket.connect(port, host);
    // }

    // var LAN = '192.168.214'; //Area network to scan 
    // var LLRP = 5084; //globally recognized LLRP port for RFID readers

    // //scan over a range of IP addresses and execute a function each time the LLRP port is shown to be open.
    // for(var i=1; i <=255; i++){
    //     checkPort(LLRP, LAN+'.'+i, function(error, status, host, port){
    //         if(status == "open"){
    //             console.log("Reader found: ", host, port, status);
    //         }
    //     });
    // }
 
    console.log("Inside Init-Scan Function");    
 }

module.exports = scan;