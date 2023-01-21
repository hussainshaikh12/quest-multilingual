const puppeteer = require("puppeteer");
describe("Check Auth-page translation", () => {
  let browser, page;
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });
  afterAll(async () => {
    await page.close();
    await browser.close();
  });
  it("Load the Register page", async () => {
    await page.goto("http://localhost:3001/register", {
      waitUntil: "load",
      timeout: 60000,
    });
  }, 60000);

  it("Register page text translates to french", async () => {
    // change language to french
    await page.waitForSelector('select[id="set-language"]');
    await page.select("select#set-language", "fr");
    
    await page.waitForSelector(".auth-page");
    let navbar = await page.$(".auth-page");
    let value = await page.evaluate((el) => el.textContent, navbar);
    const lngDetector = new (require("languagedetect"))();
    lang = lngDetector.detect(value, 1)[0][0];
    expect(lang).toMatch("french");
  }, 15000);

  it("Load the Login page", async () => {
    await page.goto("http://localhost:3001/login", {
      waitUntil: "load",
      timeout: 60000,
    });
  }, 60000);

  it("Login page text translates to french", async () => { 
    await page.waitForSelector('select[id="set-language"]');
    await page.select("select#set-language", "fr");

    await page.waitForSelector(".auth-page");
    let navbar = await page.$(".auth-page");
    let value = await page.evaluate((el) => el.textContent, navbar);
    const lngDetector = new (require("languagedetect"))();
    lang = lngDetector.detect(value, 1)[0][0];
    expect(lang).toMatch("french");
  }, 15000);
});
