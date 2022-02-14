import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://github.com/y-u-t-a?tab=repositories')
})

test.describe('ユーザーページ', () => {
  test('Repositories が Active であること', async ({ page }) => {
    await expect(page.locator('div.width-full a[data-tab-item=repositories]')).toHaveClass(/selected/)
  })
  test('表示されるリポジトリーが Public であること', async ({ page }) => {
    const repositoryVisibility = await page.innerText('span.Label--secondary')
    expect(repositoryVisibility).toEqual("Public")
  })
})
