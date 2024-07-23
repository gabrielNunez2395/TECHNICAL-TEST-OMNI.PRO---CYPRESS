# CYPRESS PROJECT PROPOSAL - TECHNICAL TEST OMNI.PRO

## Description
This automation is intended to serve as the basis for an automation project in cypress. In this project we validate a store test page “advantageonlineshopping” by making distributed test cases to run on both desktop and mobile.

### Cases

- Validating the category section, selecting the Laptops category.
- Adding a product to the cart.
- Searching for a product from the search input.
- Validate the title of the page.

#### Note
* The last three cases were performed with the ScreenPlay test design pattern.
* As a final deliverable an html report is created.

### Folder structure

```
.github/
  workflows/
    ci.yml
cypress/
  integration/
    actor/
      User.js
    tasks/
      MobileSearchForProduct.js
      MobileAddProductToCart.js
      WebSearchForProduct.js
      WebAddProductToCart.js
    questions/
      PageTitle.js
      MobileCartContent.js
      WebCartContent.js
    tests/
      addLaptopToCart.spec.js
      webSearchAndAddProduct.spec.js
      mobileSearchAndAddProduct.spec.js
    support/
      e2e.js
  reports/
     (here the individual JSON reports will be generated)
mochawesome-report/
   (here the consolidated HTML report will be generated)
generate-reports.js
```

## ✅ Technologies
### This project required:
* [Cypress](https://docs.cypress.io/guides/overview/why-cypress)
* [Node.js](https://nodejs.org/es/docs/)

## Continuos Integrations in GitHub Actions

The ci.yml file contains a basic integration of the case execution in GitHub Actions which is executed each time a push to the main branch or a pull request to the main branch is main. 

## In the VSCode terminal

### Clone project and initial settings

```
- Open a terminal in VSCode
- Go to the folder where you want to save the project, Example cd Documents/Pruebas/...
- git clone https://github.com/gabrielNunez2395/TECHNICAL-TEST-OMNI.PRO---CYPRESS.git
- cd cypress-project
- npm install
```

###  🛠️ Run tests:
```
- To run the cypress open command `npm run cy:open`, to run the tests from the cypress terminal.
- To run the cypress run command `npm run test:all`, to run the tests and print the html report from your terminal.
- To run the cypress verify command `npm run cy:verify`, to validate that cypress is correctly installed.
```
