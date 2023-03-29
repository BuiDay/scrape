const puppeteer = require("puppeteer");

const startBrowser = () =>{
    let browser;
    try {
        browser = puppeteer.launch({
            headless:true,
            args:["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors':true
        })
    } catch (error) {
        console.log("Khoi dong browser loi",error)
    }
    return browser
}

module.exports = startBrowser