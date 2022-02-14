import { test, expect } from '@playwright/test'

/**
 * API Docs: https://docs.github.com/ja/rest/reference/users#get-a-user
 */
test('GET User API', async ({ request }) => {
  const userName = "y-u-t-a"
  const response = await request.get(`https://api.github.com/users/${userName}`)
  expect(response.ok()).toBeTruthy()
  const json = await response.json()
  expect(json).toEqual(expect.objectContaining({
    name: "Yuta Ueno",
  }))
})
