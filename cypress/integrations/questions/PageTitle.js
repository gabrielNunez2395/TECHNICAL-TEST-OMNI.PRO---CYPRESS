  class PageTitle {
    static verifyContains(partialTitle) {
      // Verificar que el título de la página contenga una palabra o frase específica
      cy.title({ timeout: 7000 }).should('match', new RegExp(partialTitle, 'i'));
    }
  }
  
  export default PageTitle;