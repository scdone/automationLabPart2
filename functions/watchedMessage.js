const { By } = require('selenium-webdriver')

const watchedMessage = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('James Bond: Nighfire')

    await driver.findElement(By.xpath('//button')).click()

    await driver.findElement(By.xpath('//li/span')).click()

    const message = await driver.findElement(By.css('#message'))

    const displayed  = message.isDisplayed()

    expect(displayed).toBeTruthy()
}

module.exports = {
    watchedMessage
}