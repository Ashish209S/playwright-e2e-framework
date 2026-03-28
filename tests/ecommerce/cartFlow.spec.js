import { test } from '../../fixtures/testFixture';
import { validateEqual } from '../../utils/validator';
import { log } from '../../utils/logger';

test('Full Ecommerce Flow @e2e @smoke', async ({
    page,
    loginPage,
    productPage,
    cartPage,
    checkoutPage,
    paymentPage
  }) => {

    await loginPage.loginOrSignup();

    await page.goto('/products');

    const productPrice = await productPage.getFirstProductPrice();

    await productPage.addFirstProductAndGoToCart();

    const cartPriceText = await cartPage.getPrice();
    const cartPrice = Number(cartPriceText.replace(/[^\d]/g, ''));

    log(`Product Price: ${productPrice}`);
    log(`Cart Price: ${cartPrice}`);

    validateEqual(productPrice, cartPrice);

    await checkoutPage.proceedToCheckout();
    await checkoutPage.validateCheckoutPage();

    await checkoutPage.placeOrder();

    await paymentPage.fillPaymentDetails();
    await paymentPage.confirmPayment();

    await paymentPage.validateOrderSuccess();
});