export class ProductPage {
    constructor(page) {
        this.page = page;
    }

    async getFirstProductPrice() {
        const text = await this.page.locator('.productinfo h2').first().textContent();
        return Number(text.replace(/[^\d]/g, ''));
    }

    async addFirstProductAndGoToCart() {
        await this.page.locator('.productinfo').first().hover();
        await this.page.click('.add-to-cart');

        await this.page.waitForSelector('#cartModal');

        await this.page.click("//u[normalize-space()='View Cart']");
    }
}