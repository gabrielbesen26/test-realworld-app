import { defineConfig, devices } from '@playwright/test';
require('dotenv').config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {  
    baseURL: process.env.BASE_URL,
    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'], 
        viewport: {width: 1920, height: 1080}
      },
    },

    // {
    //   name: 'firefox',
    //   use: { 
    //     ...devices['Desktop Firefox'], 
    //     viewport: { width: 1920, height: 1080 }
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: { 
    //     ...devices['Desktop Safari'], 
    //     viewport: {width: 1920, height: 1080}
    //   },
    // },
  ],
});
