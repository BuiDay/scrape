const scrape= require('./scrape')

const scrapeController = async (browserInstance) =>{
    const url = "https://gearvn.com/"
    try {
        let browser = await browserInstance
        let category = scrape.scrapeCategory(browser,url)
    } catch (error) {
        console.log("loi o scrape controller",error)
    }
}

module.exports = scrapeController