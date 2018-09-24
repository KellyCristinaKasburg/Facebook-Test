function fila() {

    constructor() {
        this.items = [];
    }

    // Insere
    insert(element) {
        this.items[this.items.length] = element;
    }

    // Tira o primeiro elemento
    removeFirst() {
        if (this.items.length > 0){   // Devolve o primeiro elemento
            var item = this.items[0];
            this.items.splice(0,1);
            return item;
        } else {
            alert("Nenhuma pergunta para mostrar! ");
        }
    }

    readFirst() {
        if (this.items.length > 0){  // Devolve o primeiro elemento
            return this.items[0];
        } else {
            alert("Nenhuma pergunta para mostrar! ");
        }
    }
}
