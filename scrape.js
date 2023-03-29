const scrapeCategory = async (browser,url) => new Promise(async(resolve,reject)=>{
   try{ 
    let page = await browser.newPage();
    console.log(">> Mo tab moi....")
    await page.goto(url);
    console.log(">>Truy cap vao",url)
    await page.waitForSelector('.index');
    console.log('>>Website da load xong...')
    var data 
    const dataCategory = await page.$$eval("#megamenu-nav > ol > li",els=>{
        dataCategory = els.map(el =>{
            return {
                link:el.querySelector("a").href,
                imgLink:el.querySelector("a .gearvn-cat-menu-icon img").src,
                title:el.querySelector("a .gearvn-cat-menu-name").innerText
            }   
        })
       
        return dataCategory
    })

    console.log(dataCategory)
    resolve()
} catch (error) {
    console.log('loi o scrape category',error);
    reject(error)
}})

module.exports = {scrapeCategory}