describe('Add product to cart on the website', () => {
    it('should select the category Laptops, choose HP CHROMEBOOK 14 G1(ES), and add it to the cart', () => {
      // Visitar la página de inicio
      cy.visit('/');
      
      // Seleccionar la categoría "Laptops" en la sección "OUR PRODUCTS"
      cy.get('#laptopsImg', { timeout: 10000 }).should('be.visible').click(); // Ajusta el selector según el HTML de tu página
  
      // Esperar a que la página de productos se cargue
      cy.url().should('include', '/Laptops/1');
      
      // Seleccionar el producto especifico
      cy.get('#10').click();
  
      // Esperar a que la página del producto cargue
      cy.url().should('include', '/product/');
      
      // Agrega el producto al carrito
      cy.get('#productProperties .roboto-medium').contains('ADD TO CART').click();
  
      // Verifica que el producto ha sido agregado al carrito
      cy.get('#shoppingCartLink').click();
      cy.url().should('include', '/shoppingCart');
       // Verifica que el producto está en el carrito
      cy.contains('HP CHROMEBOOK 14 G1(ES)').should('exist');
    });
  });
  