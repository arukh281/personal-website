import { test, expect } from "@playwright/test";

// Guards for the owner's publishing rules. Content changes that trip these
// need the owner's say-so, not a looser regex.

test.describe("Content rules", () => {
  test.skip(({ isMobile }) => isMobile, "content is the same at every width");

  test("never names excluded employers or events", async ({ page }) => {
    await page.goto("/");
    const text = await page.locator("body").innerText();
    expect(text).not.toMatch(/halliburton|fynd|isro/i);
  });

  test("publishes no client count or revenue", async ({ page }) => {
    await page.goto("/");
    const text = await page.locator("body").innerText();
    expect(text).not.toMatch(/\bclients?\b|revenue|paying|\$\s?\d|\d\s?k\s*(a|per)\s*month/i);
  });

  test("Earmark shows no performance numbers", async ({ page }) => {
    await page.goto("/");
    const text = await page.locator('[data-work-card="01"]').innerText();
    expect(text).not.toMatch(/%|\bdB\b|AUC|AUROC|SI-SDR|\d+\.\d+/i);
  });

  test("the patent is described as pending, never granted", async ({ page }) => {
    await page.goto("/");
    const text = await page.locator("body").innerText();
    expect(text).not.toMatch(/\b(granted|issued|awarded)\b/i);
    const patent = page.locator(".idea-card-patent");
    await expect(patent).toContainText(/patent pending/i);
    await expect(patent).toContainText(/published application/i);
  });

  test("Review Insights links only to its repository", async ({ page }) => {
    await page.goto("/");
    const card = page.locator('[data-work-card="05"]');
    await expect(card).toHaveAttribute(
      "href",
      "https://github.com/arukh281/review-insights"
    );
    const hrefs = await page
      .locator("a[href]")
      .evaluateAll((els) => els.map((el) => el.getAttribute("href")!));
    expect(hrefs.filter((href) => /review/i.test(href))).toEqual([
      "https://github.com/arukh281/review-insights",
    ]);
    expect(hrefs.join(" ")).not.toMatch(/fynd|halliburton|isro|demo/i);
  });

  test("both CVs download as PDFs", async ({ page, request }) => {
    await page.goto("/");
    const links = page.locator(".contact-cv-link");
    await expect(links).toHaveCount(2);
    for (const href of await links.evaluateAll((els) =>
      els.map((el) => el.getAttribute("href")!)
    )) {
      const res = await request.get(href);
      expect(res.status()).toBe(200);
      expect(res.headers()["content-type"]).toContain("application/pdf");
    }
  });
});
