const puppeteer = require("puppeteer");
describe('Check if language selector works', () => {
  let browser, page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();

  });
  afterAll(async () => {
    await page.close();
    await browser.close();
  });
  it("Load the Home page", async () => {
    await page.goto("http://localhost:3001", {
      waitUntil: "load",
      timeout: 60000,
    });
  }, 60000);
  it('Select field value changes on click', async () => {
    const select = await page.$('#set-language');
    await page.select('select#set-language', 'en');
    const initialValue = await page.evaluate(el => el.value, select);
    await page.select('select#set-language', 'fr');
    const newValue = await page.evaluate(el => el.value, select);
    console.log(await page.evaluate(el => el.textContent, select))
    expect(initialValue).not.toBe(newValue);
  }, 15000);
});

