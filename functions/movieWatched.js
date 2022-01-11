const { By } = require('selenium-webdriver')

const movieWatched = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('James Bond: Nighfire')

    await driver.findElement(By.xpath('//button')).click()

    await driver.findElement(By.xpath('//li/span')).click()

    const strikeThrough = await driver.findElement(By.xpath('//li/span')).getAttribute('class')

    expect(strikeThrough).toContain("checked")

}

module.exports = {
    movieWatched
}