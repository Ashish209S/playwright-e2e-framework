import { APIClient } from './client.js';
import { PRODUCT_API_BASE } from '../config/env.js';

export class ProductAPI {
    constructor(request) {
        this.client = new APIClient(request);
        this.base = PRODUCT_API_BASE;
    }

    async createProduct() {
        return this.client.post(this.base, {
        name: 'Laptop',
        data: { price: 500, color: 'black' }
        });
    }

    async getProduct(id) {
        return this.client.get(`${this.base}/${id}`);
    }

    async updateProduct(id) {
        return this.client.put(`${this.base}/${id}`, {
        name: 'Laptop Updated',
        data: { price: 600, color: 'black' }
        });
    }

    async deleteProduct(id) {
        return this.client.delete(`${this.base}/${id}`);
    }
}