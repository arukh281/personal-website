import { test, expect } from "@playwright/test";

async function scrollToWork(page: import("@playwright/test").Page) {
  await page.goto("/");
  await page.locator("#work").scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
}

test.describe("Work section layout", () => {
  test("card 01 stays compact and does not stretch to card 02 height", async ({
    page,
  }) => {
    await scrollToWork(page);

    const card01 = page.locator('[data-work-card="01"]');
    const card02 = page.locator('[data-work-card="02"]');

    const box01 = await card01.boundingBox();
    const box02 = await card02.boundingBox();

    expect(box01).not.toBeNull();
    expect(box02).not.toBeNull();

    expect(box01!.height).toBeLessThanOrEqual(560);
    expect(box01!.height).toBeLessThan(box02!.height - 40);
  });

  test("work cards fit within the grid without horizontal overflow", async ({
    page,
  }, testInfo) => {
    await scrollToWork(page);

    const hasOverflow = await page.evaluate(() => {
      const doc = document.documentElement;
      return doc.scrollWidth > doc.clientWidth + 1;
    });
    expect(hasOverflow).toBe(false);

    if (testInfo.project.name !== "desktop") return;

    const grid = page.locator(".work-grid");
    const card01 = page.locator('[data-work-card="01"]');
    const gridBox = await grid.boundingBox();
    const cardBox = await card01.boundingBox();

    expect(gridBox).not.toBeNull();
    expect(cardBox).not.toBeNull();
    expect(cardBox!.x).toBeGreaterThanOrEqual(gridBox!.x - 2);
    expect(cardBox!.x + cardBox!.width).toBeLessThanOrEqual(
      gridBox!.x + gridBox!.width / 2 + 24
    );
  });

  test("card 01 footer sits near the bottom without a large empty gap", async ({
    page,
  }) => {
    await scrollToWork(page);

    const card01 = page.locator('[data-work-card="01"]');
    const footer = card01.locator(".work-card-footer");

    const cardBox = await card01.boundingBox();
    const footerBox = await footer.boundingBox();

    expect(cardBox).not.toBeNull();
    expect(footerBox).not.toBeNull();

    const gapBelowFooter = cardBox!.y + cardBox!.height - (footerBox!.y + footerBox!.height);
    expect(gapBelowFooter).toBeLessThan(48);
  });

  test("all work cards are visible and within viewport width", async ({
    page,
  }) => {
    await scrollToWork(page);

    const cards = page.locator(".work-card");
    await expect(cards).toHaveCount(5);

    const viewport = page.viewportSize()!;
    for (let i = 0; i < 5; i++) {
      const box = await cards.nth(i).boundingBox();
      expect(box).not.toBeNull();
      expect(box!.width).toBeGreaterThan(0);
      expect(box!.x).toBeGreaterThanOrEqual(-1);
      expect(box!.x + box!.width).toBeLessThanOrEqual(viewport.width + 1);
    }
  });
});

test.describe("Page layout", () => {
  test("no horizontal scroll on homepage", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth + 1;
    });
    expect(overflow).toBe(false);
  });
});
