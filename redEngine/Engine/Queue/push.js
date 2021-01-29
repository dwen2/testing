/*******************************************************************************
* File: push.js
* Summary: Allows an object to be pushed to the queue, containing 1) the name of
*    the script to be executed, and 2) the time at which to execute it.
*
* ~Holiness to the Lord~
*******************************************************************************/



/*******************************************************************************
* Function: push
* @param scriptName - String; name of exploit file to execute.
* @param execTime - Date; time to attempt the exploit.
* Summary: The queue is really implemented as a doubly linked list ring, with an
*    iterator that points to the next object in line to be checked.  When an ob-
*    ject is pushed to the list, it is inserted before the iterator, making it
*    the last object to be checked at the time of pushing.
*******************************************************************************/
function push(scriptName, execTime)
{
   console.log("inside push function");


   if (!scriptName || !execTime)
   {
      console.log("Empty parameter sent to queue push function!!");
      // throw "QUEUE_EMPTY_PUSH_PARAMETER_ERROR";  // TODO
   }

   /// Future planning: we could also add a type to each object, which would
   /// allow us to have different types of objects in the queue.
   let obj =
      {
         script: scriptName,
         time: execTime
      };
   console.log("declare obj");
   if (queue.length === 0) // No objects in the queue.
   {
      console.log("queue is empty; add following obj");
      console.log(obj.script);
      obj.prev = obj;
      obj.next = obj;
      queue.iter = obj;

   }
   // Somehow something got out of whack; this is a major error!!
   else if (queue.iter === null)
   {
      console.log("QUEUE ERROR: iterator is 'null'.")
      // throw "QUEUE_POINTER_ERROR";  // TODO
   }
   else // Push the object to the position just before the iterator, i.e. the "end" of the queue.
   {
      console.log("push obj to iterator");
      obj.next = queue.iter;
      obj.prev = queue.iter.prev;
      queue.iter.prev = obj;
      obj.prev.next = obj;
   }

   ++queue.length; // The queue size just got bigger!
   console.log("queue length ++");

   if (queueDebugFlag) // Log it out if the flag is set.
   {
      console.log("Queue added:   Script - " + obj.script + "   Time - " + obj.time);
   }
}

module.exports = push;
