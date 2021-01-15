
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
   let ips = process.env.private_ips.split(",");
   
   // Create the target object(s) for the known IP(s).
   let i = 0;
   let ipSize = ips.length;
   for (; i < ipSize; ++i)
   {
      let targObj = {};
      targObj.ip = ips[i];
      global.targets.push(targObj);
   }
   
   console.log("INFO: Initializing Red Team in " + process.env.difficulty + " Mode.  " + new Date(Date.now()).toLocaleString());
   
   // Set the difficulty of the event based on the Terraform configuration.
   switch (process.env.difficulty)
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
         let iTargs = 0;
         let tarLen = global.targets.length;
         for (; iTargs < tarLen; ++iTargs)
         {
            // Create the individual exploit object.
            let expObj =
            {
               targetObj : global.targets[iTargs],
               env : symbols.pythonEnv,
               type : symbols.scanType,
               target : symbols.genericTarget,
               name : "nmapScan.py"
            };
   
            // Push the finished exploit object to the queue, t = 5 min from now.
            let date = new Date(Date.now() + 300000); // 300000 is in milliseconds; five minutes.
            global.queue.push(expObj, date);
            console.log("  '--> Pushed NMAP scan on IP " + global.targets[iTargs].ip +
                        " for time " + date.toLocaleString());
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

module.exports = init;