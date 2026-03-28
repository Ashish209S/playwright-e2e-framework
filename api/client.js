export class APIClient {
    constructor(request) {
        this.request = request;
    }

    async get(url) {
        const res = await this.request.get(url);
        return this.parse(res);
    }

    async post(url, data) {
        const res = await this.request.post(url, { data });
        return this.parse(res);
    }

    async put(url, data) {
        const res = await this.request.put(url, { data });
        return this.parse(res);
    }

    async delete(url) {
        const res = await this.request.delete(url);
        return res.status();
    }

    async parse(res) {
        const type = res.headers()['content-type'];

        if (!type?.includes('application/json')) {
        const text = await res.text();
        throw new Error(`Non JSON: ${text}`);
        }

        return res.json();
    }
}