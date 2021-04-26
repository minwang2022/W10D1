
class DOMNodeCollection {
    constructor(nodes) {
        this.nodes = nodes;
    }

    html(str) {
        if (!str) {
            return this.nodes[0].innerHTML;      
        } else {
            this.nodes.forEach((node) => {
                node.innerHTML = str;
            })
        }     
    }

    empty() {
        this.nodes.forEach(node => {
            node.innerHTML = "";
        })
    }

    append(arg) {   
        // debugger    
        if (typeof arg === "string") {
            this.nodes.forEach((ele) => {
                ele.innerHTML += arg;
            })
        } else if (arg instanceof HTMLElement) {
            this.nodes.forEach((ele) => {
                ele.appendChild(arg.cloneNode(true));
            })
        } else if (arg instanceof DOMNodeCollection){
            // debugger
            this.nodes.forEach((parentNode) => {
                arg.nodes.forEach(childNode => {
                    parentNode.appendChild(childNode.cloneNode(true));
                })
            })
        }
    }

  

}

window.DOMNodeCollection = DOMNodeCollection;

module.exports = DOMNodeCollection;