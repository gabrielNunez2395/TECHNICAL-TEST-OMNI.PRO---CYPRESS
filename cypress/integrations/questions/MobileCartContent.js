class MobileCartContent {
    static verifyItemInCart() {
      cy.get('#mobile-btn').click();
      cy.get('#mobileCart').click();
      cy.get('#mobileShoppingCart').should('have.length.gt', 0);
    }
  }
  
  export default MobileCartContent;