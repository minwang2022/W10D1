
class DOMNodeCollection {
    constructor(array) {
        this.array = array;
    }

    html(str) {
        if (!str) {
            return this.array[0].innerHTML;      
        } else {
            this.array.forEach((ele) => {
                ele.innerHTML = str;
            })
        }     
    }

    empty() {
        this.array.forEach(el => {
            el.innerHTML = "";
        })
    }

    append(arg) {       
        if (typeof arg === "string") {
            this.array.forEach((ele) => {
                ele.innerHTML += arg;
            })
        } else if (arg instanceof HTMLElement) {
            this.array.forEach((ele) => {
                ele.innerHTML += $l(arg);
            })
        } else if (arg instanceof DOMNodeCollection){
            this.array.forEach((ele) => {
                arg.forEach(node => {
                    ele.appendChild(node);
                })
            })
        }
    }

  

}


module.exports = DOMNodeCollection;