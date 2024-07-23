import User from '../actor/User';
import MobileSearchForProduct from '../tasks/MobileSearchForProduct';
import MobileAddProductToCart from '../tasks/MobileAddProductToCart';
import PageTitle from '../questions/PageTitle';
import MobileCartContent from '../questions/MobileCartContent';

describe('Search and add products to the cart on mobile', () => {
  const user = new User();

  beforeEach(() => {
    cy.viewport('iphone-6');
    cy.visit('/');
  });

  it('should search for a product and add it to the cart', () => {
    cy.wrap(user)
      .as('actor')
      .then(() => {
        new MobileSearchForProduct('Laptop').performAs(user);
        new MobileAddProductToCart().performAs(user);
        PageTitle.verifyContains('Advantage Shopping');
        MobileCartContent.verifyItemInCart();
      });
  });
});