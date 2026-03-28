export class PaymentPage {
    constructor(page) {
        this.page = page;

        this.name = '[data-qa="name-on-card"]';
        this.card = '[data-qa="card-number"]';
        this.cvv = '[data-qa="cvc"]';
        this.expiryMonth = '[data-qa="expiry-month"]';
        this.expiryYear = '[data-qa="expiry-year"]';

        this.payBtn = '[data-qa="pay-button"]';

        this.successMsg = 'text=Order Placed';
    }

    async fillPaymentDetails() {
        await this.page.fill(this.name, 'Ashish');
        await this.page.fill(this.card, '4111111111111111');
        await this.page.fill(this.cvv, '123');
        await this.page.fill(this.expiryMonth, '12');
        await this.page.fill(this.expiryYear, '2030');
    }

    async confirmPayment() {
        await this.page.click(this.payBtn);
    }

    async validateOrderSuccess() {
        await this.page.waitForSelector(this.successMsg);
    }
}