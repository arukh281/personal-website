import { test, expect, type Page } from "@playwright/test";

async function scrollToWork(page: Page) {
  await page.goto("/");
  await page.locator("#work").scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
}

test.describe("Work section layout", () => {
  test("featured projects come first, in order, then the compact cards", async ({
    page,
  }) => {
    await scrollToWork(page);

    await expect(page.locator("[data-work-card]")).toHaveCount(8);
    await expect(page.locator(".work-feature")).toHaveCount(4);
    await expect(page.locator(".work-card")).toHaveCount(4);

    const titles = (await page.locator(".work-feature-title").allInnerTexts()).map(
      (t) => t.replace(/\s+/g, " ").trim().toUpperCase()
    );
    expect(titles).toEqual([
      "EAR MARK",
      "HYPER CHARGE",
      "ACOUSTIC DRONE DETECTION",
      "THE ALGORITHM LAB",
    ]);
  });

  test("every card has a one-line summary", async ({ page }) => {
    await scrollToWork(page);

    const cards = page.locator("[data-work-card]");
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      const summary = cards.nth(i).locator("[data-work-summary]");
      await expect(summary).toHaveCount(1);
      const text = (await summary.innerText()).trim();
      expect(text.length).toBeGreaterThan(40);
    }
  });

  test("cards fit the viewport and nothing inside them is clipped", async ({
    page,
  }) => {
    await scrollToWork(page);

    const viewport = page.viewportSize()!;
    const cards = page.locator("[data-work-card]");
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      const card = cards.nth(i);
      const box = await card.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.x).toBeGreaterThanOrEqual(-1);
      expect(box!.x + box!.width).toBeLessThanOrEqual(viewport.width + 1);

      const overflow = await card.evaluate((el) => ({
        x: el.scrollWidth - el.clientWidth,
        y: el.scrollHeight - el.clientHeight,
      }));
      expect(overflow.x).toBeLessThanOrEqual(1);
      expect(overflow.y).toBeLessThanOrEqual(1);
    }
  });

  test("compact card titles never run into the card number", async ({
    page,
  }) => {
    await scrollToWork(page);

    const cards = page.locator(".work-card");
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      const result = await cards.nth(i).evaluate((el) => {
        const title = el.querySelector(".work-card-title") as HTMLElement;
        const num = el.querySelector(".work-card-num") as HTMLElement;
        const t = title.getBoundingClientRect();
        const n = num.getBoundingClientRect();
        const intersects =
          t.left < n.right && n.left < t.right && t.top < n.bottom && n.top < t.bottom;
        return {
          intersects,
          titleOverflow: title.scrollWidth - title.clientWidth,
        };
      });
      expect(result.intersects).toBe(false);
      expect(result.titleOverflow).toBeLessThanOrEqual(1);
    }
  });

  test("compact cards sit in two columns on desktop", async ({
    page,
  }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop", "desktop only");
    await scrollToWork(page);

    const grid = await page.locator(".work-grid").boundingBox();
    const first = await page.locator('[data-work-card="05"]').boundingBox();
    const second = await page.locator('[data-work-card="06"]').boundingBox();

    expect(first!.x).toBeGreaterThanOrEqual(grid!.x - 2);
    expect(first!.x + first!.width).toBeLessThanOrEqual(
      grid!.x + grid!.width / 2 + 24
    );
    expect(second!.x).toBeGreaterThan(grid!.x + grid!.width / 2 - 24);
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

  test("top bar fits, including the CV link", async ({ page }) => {
    await page.goto("/");
    const viewport = page.viewportSize()!;
    const cv = await page.locator(".top-bar-cv").boundingBox();
    const mark = await page.locator(".top-bar-mark").boundingBox();
    expect(cv).not.toBeNull();
    expect(mark!.x + mark!.width).toBeLessThanOrEqual(viewport.width + 1);
  });
});
