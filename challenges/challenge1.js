/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 *    I guessed that the output would be Step 1, Step 3, Step 2. I guessed this
 *    because the snooze function is called after Step 1 with an interval of 2
 *    seconds. This means that the console logs would print in order, but step 2 would be delayed by 2 seconds.
 * 
 * 
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 *    Step 1, Step 3, Step 2.
 * 
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 *    The outputs will print in the same order as before. This is because the 
 *    snooze function is still being called after Step 1, but the delay is now 0. 
 *    This means that the snooze function will be called, but will not be delayed. 
 *    This means that the console logs will print in order, but step 2 will be delayed 
 *    by 0 seconds. It's all about the microtask queue!
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
  setTimeout(function () {
    action();
  }, 0);
}
console.log('Step 1');

snooze(function () {
  console.log('Step 2');
  console.log("Async Action completed via callback");
});

console.log('Step 3');

