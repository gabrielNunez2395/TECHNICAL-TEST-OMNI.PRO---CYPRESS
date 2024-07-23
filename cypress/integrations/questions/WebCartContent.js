class CartContent {
    static verifyItemInCart() {
      cy.get('#shoppingCartLink').click();
      cy.get('.product').should('have.length.gt', 0);
    }
  }
  
  export default CartContent;