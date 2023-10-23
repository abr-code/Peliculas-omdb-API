// Define a debounce function that takes a function and a delay as parameters
function debounce(func, delay) {
  // Declare a variable to store the timer id
  let timerId;
  // Return a new function that takes the same arguments as the original function
  return function (...args) {
    // Clear any existing timer
    clearTimeout(timerId);
    // Set a new timer with the given delay
    timerId = setTimeout(() => {
      // Call the original function with the current context and arguments
      func.apply(this, args);
    }, delay);
  };
}

export default debounce;
