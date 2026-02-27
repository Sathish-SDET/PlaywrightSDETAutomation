// @ts-check
const { defineConfig } = require('@playwright/test');
require('dotenv').config();

module.exports = defineConfig({
  timeout: 30000,
  retries: 1,
  workers: 3,
  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ],
  projects:[
    {
      name:'ui',
      testDir: './tests/ui',
      use: {
        headless: true,
        baseURL: process.env.UI_BASE_URL,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry'
      }
    },
    {
      name:'api',
      testDir:'./tests/api',
      use:{
         baseURL: process.env.API_BASE_URL
      }
    }
]
});
