class PagedList {
    constructor(list, pages) {
        this.list = list;
        this.pages = pages;
        this.pagedList = [];

        // Calcular el número de elementos por página
        let itemsPerPage = Math.ceil(this.list.length / this.pages);
        let currentIndex = 0;

        // Recorrer las páginas
        for (let i = 0; i < this.pages; i++) {
            let newPage = [];

            // Añadir elementos a la página actual
            for (let j = 0; j < itemsPerPage; j++) {
                // Si ya no hay más elementos en la lista, terminar
                if (!this.list[currentIndex]) {
                    break;
                }
                newPage.push(this.list[currentIndex]);
                currentIndex++;
            }

            // Si hay elementos en la nueva página, agregarla
            if (newPage.length > 0) {
                this.pagedList.push(newPage);
            }
        }
    }

    // Método para imprimir la lista de páginas
    printList() {
        this.pagedList.forEach((page, index) => {
            console.log(`Página ${index + 1}: ${page.join(", ")}`);
        });
    }

    // Método para imprimir una página específica
    printPage(numPage) {
        if (!this.pagedList[numPage - 1]) {
            console.log("No existe este número de página");
        } else {
            console.log(`Página ${numPage}: ${this.pagedList[numPage - 1].join(", ")}`);
        }
    }
}

module.exports = PagedList;
