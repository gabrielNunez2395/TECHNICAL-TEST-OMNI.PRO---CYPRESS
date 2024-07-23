class SearchForProduct {
  constructor(productName) {
    this.productName = productName;
  }

  performAs(actor) {
    // Ubica el icono de búsqueda y hace clic en él
    cy.get('#searchSection', { timeout: 7000 }).should('be.visible').click();
    
    // Se escribe el nombre del producto en el campo de búsqueda y presiona Enter
    cy.get('#autoComplete', { timeout: 10000 }) // Asegúrate de que el selector del campo de búsqueda sea correcto
      .should('be.visible')
      .type(`${this.productName}{enter}`);
  }
}

export default SearchForProduct;