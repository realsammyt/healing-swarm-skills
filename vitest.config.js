import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['**/*.{test,spec}.js'],
    // No test suites exist yet; a clean `npm test` should pass, not fail CI.
    passWithNoTests: true,
  },
});
