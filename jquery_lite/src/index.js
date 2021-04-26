const DOMNodeCollection = require("./dom_node_collection");

window.$l = function(arg) {
  if (typeof arg === 'string') {
    let nodeList = document.querySelectorAll(arg);
    return new DOMNodeCollection(Array.from(nodeList));
  } else if (arg instanceof HTMLElement) {
    return new DOMNodeCollection([arg]);
  }
}

// console.log($l);
window.$l = $l;