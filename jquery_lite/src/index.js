const DOMNodeCollection = require("./dom_node_collection");

window.$l = function(arg) {
  // debugger
  if (typeof arg === 'string') {
    let nodeList = document.querySelectorAll(arg);
    // debugger
    return new DOMNodeCollection(Array.from(nodeList));
  } else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }
}

// console.log($l);
window.$l = $l;