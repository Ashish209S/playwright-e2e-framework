import { test } from '../../fixtures/testFixture';
import { expect } from '@playwright/test';
import { log } from '../../utils/logger';
import { retry } from '../../utils/retryHelper';

test('Product CRUD Flow @api @smoke', async ({ productApi }) => {

    const created = await retry(() => productApi.createProduct());
    const id = created.id;

    log(`Created ID: ${id}`);

    const fetched = await productApi.getProduct(id);
    expect(fetched.name).toBe('Laptop');

    const updated = await productApi.updateProduct(id);
    expect(updated.name).toBe('Laptop Updated');

    const status = await productApi.deleteProduct(id);
    expect(status).toBe(200);

    log('CRUD flow completed');
});