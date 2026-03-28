import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/ecommerce/LoginPage.js';
import { ProductPage } from '../pages/ecommerce/ProductPage.js';
import { CartPage } from '../pages/ecommerce/CartPage.js';
import { CheckoutPage } from '../pages/ecommerce/CheckoutPage.js';
import { PaymentPage } from '../pages/ecommerce/PaymentPage.js';
import { ProductAPI } from '../api/product.api.js';

export const test = base.extend({
    loginPage: async ({ page }, use) => {
      await use(new LoginPage(page));
    },

    productPage: async ({ page }, use) => {
      await use(new ProductPage(page));
    },

    cartPage: async ({ page }, use) => {
      await use(new CartPage(page));
    },

    checkoutPage: async ({ page }, use) => {
      await use(new CheckoutPage(page));
    },

    paymentPage: async ({ page }, use) => {
      await use(new PaymentPage(page));
    },

    productApi: async ({ request }, use) => {
      await use(new ProductAPI(request));
    }
});