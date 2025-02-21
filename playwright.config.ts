import { defineConfig } from "@playwright/test";

export default defineConfig({
  snapshotDir: "./playwright",
  reporter: "html",
  testDir: "./playwright",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    contextOptions: {
      reducedMotion: 'reduce',
    },
    trace: "on-first-retry",
  },
});

