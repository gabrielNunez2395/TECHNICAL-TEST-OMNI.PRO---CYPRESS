class MobileSearchForProduct {
  constructor(productName) {
    this.productName = productName;
  }

  performAs(actor) {
    // Ubica el input de buscar
    cy.get('#mobileSearch', { timeout: 7000 }).should('be.visible').click();
    
    // Se escribe el nombre del producto en el input y busca
    cy.get('input[name=mobile_search]', { timeout: 7000 })
      .should('be.visible')
      .type(`${this.productName}{enter}`);
  }
}

export default MobileSearchForProduct;