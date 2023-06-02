const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("Draw button displays choices", async () => {
    await driver.get("http://localhost:8000");
    await driver.sleep(2000)
    await driver.findElement(By.css('button[id="draw"]')).click()
    await driver.sleep(2000)
    let result = await driver.wait(until.elementLocated(By.css('div[id="choices"]')), 1000)

    expect(await result.isDisplayed(true))
  })

  test("Duel button function and results in play again button", async () => {
    await driver.get("http://localhost:8000");
    await driver.sleep(2000)
    await driver.findElement(By.css('button[id="draw"]')).click()
    await driver.sleep(2000)
    await driver.findElement(By.css('button[class="bot-btn"]')).click()
    await driver.sleep(2000)
    await driver.findElement(By.css('button[class="bot-btn"]')).click()
    await driver.sleep(2000)
    await driver.findElement(By.css('button[id="duel"]')).click()
    await driver.sleep(5000)
    
    let result = await driver.wait(until.elementLocated(By.css('button[id="play-again"]')), 1000)
    

    expect(await result.isDisplayed(true))
  })


});