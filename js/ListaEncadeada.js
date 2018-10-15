class ListaEncadeada{

    constructor() {
        var quantity = 0;
        var first = null;
    
    this.insertFirst = function(element) {
        var node = {
            element : element,
            prox : this.first  // Insere o primeiro elemento na fila
        };
        this.first = node;
        this.quantity++;
    };

    this.removeFirst = function(){
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
}