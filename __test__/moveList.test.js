const { movieWatched } = require('../functions/movieWatched')

const { Builder, Capabilities } = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeEach(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})



test('Movie title should display with strikethough when clicked', async () => {
    await movieWatched(driver)
})