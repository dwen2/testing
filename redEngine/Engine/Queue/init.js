/*******************************************************************************
* File: main.js
* Summary: Initializes the queue used by the Red Team Engine.
*
* ~ Holiness to the Lord ~
*******************************************************************************/

const push = require('./push');
const pop = require('./popNextTimedExploit');



/*******************************************************************************
* Function: init
* Parameters: None.
* Returns: Nothing.
* Summary: Sets up the global queue used by the Red Team Engine.  The queue is
*    really implemented as a doubly linked list ring, with an iterator that
*    points to the next object in line to be checked.
*******************************************************************************/
function init()
{
   global.queue = {};
   queue.length = 0;
   queue.iter = null;
   queue.push = push;
   queue.pop = pop;
}

module.exports = init;
