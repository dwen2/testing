
const symbols = require('../symbols');



function init()
{
   console.log("///// BEGINNING RED TEAM INITIALIZATION /////");


   require('../Queue/init')(); // Run the queue initialization.


   /// Pre-populate the queue with standard initial attacks. ///

   // Check initial difficulty level and push appropriate attacks:
   // * Default name and password
   // * Scanning for systems on the network
   // * Typical attacks (1500 common endpoints)

   // TODO   Is this the job of the init function, or should Cerebro do this?
   // From a design perspective, if Cerebro is responsible for making decisions and
   // then pushing exploits to the queue, then we should not do the initialization here.
   // We can do the work to figure out what happens for the different types of attacks/checks,
   // but the Intelligence module should be responsible for pushing everything, even the
   // initial state.

   // Tokenize the IPs (passed as an environmental variable from Terraform) with a comma as the separator.
   let ips = ["127.0.0.1"] //process.env.private_ips.split(",");

   // Create the target object(s) for the known IP(s).
   let i = 0;
   let ipSize = ips.length;
   for (; i < ipSize; ++i)
   {
      let targObj = {};
      targObj.ip = ips[i];
      global.targets.push(targObj);
   }

   //console.log("INFO: Initializing Red Team in " + process.env.difficulty + " Mode.  " + new Date(Date.now()).toLocaleString());
   console.log("INFO: Initializing Red Team in Easy Mode. " + new Date(Date.now()).toLocaleString());

   // Set the difficulty of the event based on the Terraform configuration.
   switch ("Easy")
   {
      case "PWN":
      {
         break;
      }
      case "Hard":
      {
         break;
      }
      case "Medium":
      {
         break;
      }
      case "Easy":
      {
        /*var childProcess = require('child_process');

        function runScript(scriptPath, callBack) {
          var invoked = false;

          var process = childProcess.fork(scriptPath);

          process.on('error', function (err) {
            if (invoked) return;
            invoked = true;
            callback(err);
          });

          // execute the callback once the process has finished running
          process.on('exit', function (code) {
            if (invoked) return;
            invoked = true;
            var err = code === 0 ? null : new Error('exit code ' + code);
            callback(err);
          });
        }

        runScript('../../Exploits/nmapJS.JS', function (err) {
          if (err) throw err;
          console.log('Finished running nmap');
        });*/

         let iTargs = 0;
         let tarLen = global.targets.length;
         for (; iTargs < tarLen; ++iTargs)
         {
            // Create the individual exploit object.
            let expObj =
            {
               targetObj : global.targets[iTargs],
               env : symbols.nodeEnv,
               type : symbols.scanType,
               target : symbols.genericTarget,
               name : "nmapJS.js"
            };

            // Push the finished exploit object to the queue, t = 5 min from now.
            let date = new Date(Date.now() + 3000); // 300000 is in milliseconds; five minutes.
            global.queue.push(expObj, date);
            console.log("--> Deployed attacking script \'" + expObj.name + "\' on IP \'" + global.targets[iTargs].ip +
                        "\' for time " + date.toLocaleString() + "\' in 3 sec\' <--");
         }
         break;

      }
      default:
      {
         console.log("ERROR: Invalid Difficulty setting!\n   '--> Exiting program.");
         exit(1);
      }
   }

   console.log("///// FINISHED RED TEAM INITIALIZATION /////");
}
console.log("start of initialization code");
module.exports = init;
