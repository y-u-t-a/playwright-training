import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://github.com/y-u-t-a')
})

test.describe('ユーザーページ', () => {
  test('Overview が Active であること', async ({ page }) => {
    await expect(page.locator('div.width-full a[data-tab-item=overview]')).toHaveClass(/selected/)
  })
})
