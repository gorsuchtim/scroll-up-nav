"use strict";

const Util = {
  addEvents(element, eventType, fn, ...args) {
    element.addEventListener(eventType, function() {
      fn(args);
    });
  },
  buildElement(obj) {
    var element = document.createElement(obj.type);
    obj.attrs != "" ? Util.setAttributes(element, obj.attrs) : false;
    obj.content != "" ? (element.textContent = obj.content) : false;
    obj.appendTo != "" ? obj.appendTo.appendChild(element) : false;

    return element;
  },
  composeFunctions(fns, startValue) {
    /**
     * @desc Iterate array of functions
     * Run each function and return its value to the next function to run
     * @params fns is an array of parameters
     * startValue is starting value to manipulate and pass to each subsequent function
     * @return returns the end manipulated value after running all iterated functions (fns)
     */

    return fns.reduce((startValue, fn) => {
      return (startValue = Util.runFunctionWithArg(fn, startValue));
    }, startValue);
  },
  getDate() {
    var date = new Date();
    return date.getDate();
  },
  getMonthName() {
    var date = new Date();
    return date.toLocaleString("en-us", { month: "long" });
  },
  getTime() {
    var date = new Date();
    var hours = date.getHours();
    var amPm;

    if (hours > 12) {
      amPm = "pm";
      hours = hours - 12;
    } else {
      amPm = "am";
    }

    return `${hours}:${date.getMinutes()}${amPm}`;
  },
  getYear() {
    var date = new Date();
    return date.getFullYear();
  },
  iOSSafariTest() {
    /**
     * @desc Determine if user is on iDevice
     * Note: using for loop instead of forEach so we can break out of iteration with return true once device is matched
     */
    var iDevices = ["iPad", "MacIntel", "iPhone", "iPod"];
    for (var i = 0; i < iDevices.length; i++) {
      if (navigator.platform.indexOf(iDevices[i]) != -1) {
        return true;
      }
    }
  },
  modifyHiddenState(element, className, directive) {
    /**
     * @desc Modify the hidden state and aria-attributes of an element
     * @params element to be modified, className (str) of class to add/remove, and directive (str) to "add" or "remove" it
     */

    if (directive == "add") {
      element.classList.add(className);
      element.setAttribute("aria-hidden", "true");
    } else if (directive == "remove") {
      element.classList.remove(className);
      element.setAttribute("aria-hidden", "false");
    }

    return element;
  },
  runFunctionWithArg(fn, arg) {
    /**
     * @desc Take in function name and argument and
     * @return value of having run that function using that argument
     */
    return fn(arg);
  },
  setAttributes(el, attrs) {
    for (var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
    return el;
  }
};

export default Util;
