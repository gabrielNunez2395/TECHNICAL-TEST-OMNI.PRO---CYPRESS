import User from '../actor/User';
import SearchForProduct from '../tasks/WebSearchForProduct';
import AddProductToCart from '../tasks/WebAddProductToCart';
import PageTitle from '../questions/PageTitle';
import CartContent from '../questions/WebCartContent';

describe('Search and add products to cart on the website', () => {
  const user = new User();

  beforeEach(() => {
    cy.viewport('macbook-15');
    cy.visit('/');
  });

  it('should search for a product and add it to the cart', () => {
    cy.wrap(user)
      .as('actor')
      .then(() => {
        new SearchForProduct('Laptop').performAs(user);
        new AddProductToCart().performAs(user);
        PageTitle.verifyContains('Advantage Shopping');
        CartContent.verifyItemInCart();
      });
  });
});