class AddProductToCart {
    performAs(actor) {
      cy.get('.product').first().click();
      cy.get('#productProperties > .colors', { timeout: 7000 }).should('be.visible').first().click();
      cy.get('.plus').click();
      cy.get('.roboto-medium').contains('ADD TO CART').click();
    }
  }
  
  export default AddProductToCart;