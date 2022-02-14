import { test, expect } from '@playwright/test'

/**
 * API Docs: https://docs.github.com/ja/rest/reference/repos#get-a-repository
 */
test('GET Repository API', async ({ request }) => {
  const owner = "microsoft"
  const repo = "playwright"
  const response = await request.get(`https://api.github.com/repos/${owner}/${repo}`)
  expect(response.ok()).toBeTruthy()
  const json = await response.json()
  expect(json).toEqual(expect.objectContaining({
    "name": "playwright",
    "visibility": "public",
    "full_name": "microsoft/playwright",
  }))
})

