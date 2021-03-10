/**
 *  Enforces a maximum number of times a function can be called over a certain value of time (milliseconds).
 *  Accepts the callback function to be run and
 *  the timing that executes that function at most once every x (timing value) milliseconds.”
 *
 * Throttling Reference: https://css-tricks.com/the-difference-between-throttling-and-debouncing/
 *
 * @param {*} callback function to be called during throttle
 * @param {*} timing time to wait to allow future calls to the callback function
 */

const throttle = (callback, timing) => {
  let wait = false;

  return () => {
    if (!wait) {
      if (typeof callback === "function") callback(); // execute the function passed in the scroll event
      wait = true; // then set wait to true to prevent future calls to that function

      setTimeout(() => {
        wait = false; // then set wait back to false to allow future calls to function
      }, timing);
    }
  };
};

export default throttle;
