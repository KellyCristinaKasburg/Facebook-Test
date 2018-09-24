function pilha() {

    let items = [];

    this.push = function (element) {
        items.push(element); //coloca elementos no vetor
    }

    this.pop = function () {
        items.pop(); //remove elementos
    }

    this.peek = function () { //adiciona ao topo
        return items[items.length - 1];
    }
}
