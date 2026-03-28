import { APIClient } from './client.js';
import { API_BASE } from '../config/env.js';

export class EcommerceAPI {
    constructor(request) {
        this.client = new APIClient(request);
    }

    async getProducts() {
        return this.client.get(`${API_BASE}/products`);
    }
}