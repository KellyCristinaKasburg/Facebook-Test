function ListaEncadeada() {

    constructor() {
        this.quantity = 0;
        this.first = null;
    } 
    
    insertFirst(element) {
        var node = {
            element : element,
            prox : this.first  // Insere o primeiro elemento na fila
        };
        this.first = node;
        this.quantity++;
    }

    removeFirst() {
        if (this.first === null){
            return null;
        } else {
            var out = this.first;
            this.first = this.first.prox;  // Remove o primeiro elemento da fila 
            if (this.quantity > 0) {
                this.quantity--;
            }
            return out.element;
        }
    }
}
