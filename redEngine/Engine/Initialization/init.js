console.log("Inside init"); 
const symbols = require('../symbols');

function init()
{
   console.log("///// BEGINNING RED TEAM INITIALIZATION /////");


   require('../Queue/init')(); // Run the queue initialization.


   /// Pre-populate the queue with standard initial attacks. ///
    
   // Tokenize the IPs (passed as an environmental variable from Terraform) with a comma as the separator.
   
   let ips = ["192.168.214.129"]//process.env.private_ips.split(",");

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
   console.log("INFO: Initializing Red Team Engine ");

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
            // console.log("--> Deployed attacking script \'" + expObj.name + "\' on IP \'" + global.targets[iTargs].ip +
            //             "\' for time " + date.toLocaleString() + "\' in 3 sec\' <--");
            console.log("--> Deployed attacking script \'" + expObj.name + "\' on IP \'" + global.targets[iTargs].ip +
                        "\' at time \'" + date.toLocaleString() + "\' in 1 sec\' <--");
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

console.log("Start of Initialization");
module.exports = init;
