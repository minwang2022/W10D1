
class DOMNodeCollection {
    constructor(array) {
        this.array = array;
    }

    html(str) {
        if (!str) {
            return this.array[0].innerHTML;      
        } else {
            this.array.forEach((ele) => {
                ele.innerHTML = str; //undefined
            })
        }     
    }

    
}


module.exports = DOMNodeCollection;