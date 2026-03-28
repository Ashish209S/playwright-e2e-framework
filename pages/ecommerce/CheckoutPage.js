export class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.checkoutBtn = "//a[normalize-space()='Proceed To Checkout']";
        this.placeOrderBtn = 'a[href="/payment"]';

        this.addressDetails = '#address_delivery';
        this.orderReview = '#cart_info';
    }

    async proceedToCheckout() {
        await this.page.click(this.checkoutBtn);
    }

    async validateCheckoutPage() {
        await this.page.waitForSelector(this.addressDetails);
        await this.page.waitForSelector(this.orderReview);
    }

    async placeOrder() {
        await this.page.click(this.placeOrderBtn);
    }
}