/*******************************************************************************
* File: main.js
* Summary: The main file that starts the Red Team engine.  It calls the init
*          function which sets up the first objects.
*          The bulk of the operation is simply attempting to retrieve objects
*          from the queue, sending them to the exploiter when retrieved.  As the
*          exploit scripts operate, they will return the data which Cerebro (the
*          Intelligencer) will use to formulate the next attack.
*
* ~~ Holiness to the Lord ~~
*******************************************************************************/


// Set flags // TODO parse the command line and set flags
global.queueDebugFlag = false;

// Holds the objects which contain data about targets the script will be attacking.
// Objects may contain one or more of the following properties (as strings).
// ip - The IP address of the target
//
global.targets = [];



require('./Initialization/init')(); // Initialize the system.



const symbols = require('./symbols');
const exploiter = require('./Exploiter/exploiter');


while (1)
{
   let exp = queue.pop();
   if (exp != symbols.noScript)
   {
      let expRet = exploiter(exp);
      // Do something with the return object
   }
   // sleep(1);
}



// // TODO create testing functions
// /////////////// TESTING ONLY ///////////////////
// console.log("\n///// TESTING START /////\n");
// let dateNow = new Date(Date.now());
//
// queue.pop();
//
// queue.push("A", new Date(dateNow.getTime() + (0 * 6000)));
// queue.push("B", new Date(dateNow.getTime() + (0 * 60000)));
// queue.push("B2", new Date(dateNow.getTime() + (0 * 60000)));
// queue.push("C", new Date(dateNow.getTime() + (0 * 6000)));
//
// /// Stress-testing system.
// // for (let i = 0; i < 1000; ++i)
// // {
// //    queue.push("Z" + i, new Date(dateNow.getTime() + (0 * 6000)));
// // }
//
// while(queue.length > 0)
// {
//    let popper = queue.pop();
//    if (popper != symbols.noScript)
//    {
//       console.log("Popping object " + popper);
//    }
// }
//
//
// console.log("\n////// TESTING END //////\n");