import { defineConfig } from '@playwright/test';
import { BASE_URL } from './config/env.js';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,

  use: {
    baseURL: BASE_URL,
    headless: false,
    screenshot: 'on',
    video: 'on',
    trace: 'on'
  },

    reporter: [
      ['html', { open: 'never' }],
      ['junit', { outputFile: 'results.xml' }]
    ],
});
