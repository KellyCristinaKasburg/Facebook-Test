class fila {

    constructor() {
            let items = [];

        this.insert = function (element) {
            element: this.items[this.items.length];
            this.items[this.items.length] = element;
        };

        this.removeFirst = function () {
            if (this.items.length > 0) { // Devolve o primeiro elemento
                var item = this.items[0];
                this.items.splice(0, 1);
                return item;
            }
            else {
                alert("Nenhuma pergunta para mostrar! ");
            }
        };

        this.readFirst = function () {
            if (this.items.length > 0) { // Devolve o primeiro elemento
                return this.items[0];
            }
            else {
                alert("Nenhuma pergunta para mostrar! ");
            }
        };
    }
}