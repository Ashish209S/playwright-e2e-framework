export class CartPage {
    constructor(page) {
        this.page = page;
    }

    async getPrice() {
        const text = await this.page.locator('.cart_price').first().textContent();
        
        const price = text.replace(/\s+/g, ' ').trim();

        return price;
    }
}