const scrapers= require('./scrape')
const fs = require('fs')

const scrapeController = async (browserInstance) =>{
    const url = "https://cellphones.com.vn/"
    const indexs = [0,1,2,3,4,8]
    try {
        let browser = await browserInstance
        let category = await scrapers.scrapeCategory(browser,url)
        const selectedCategory = category.filter((item,index)=>indexs.some(i=>i===index))
        fs.writeFile("categories.json",JSON.stringify(selectedCategory),(err)=>{
            if(err) console.log('Ghi thất bại',err);
            console.log('Ghi categories thành công')
        })
        
        //lay link tung phan loai dien thoai////////////////////////////////////////////////////
        const linkCategories = await scrapers.scrapeLinkCategory(browser,selectedCategory[0].link)
       
        //tong hop tat link cac hang mobile
        //lay chi tiet dien thoai
        //apple moblie
        const DetailsMobile = await scrapers.scraper(browser,linkCategories[0][0])
        fs.writeFile("apple-mobile.json",JSON.stringify(DetailsMobile),(err)=>{
            if(err) console.log('Ghi thất bại',err);
        })

        // const DetailsMobile_2 = await scrapers.scraper(browser,linkCategories[0][1])
        // fs.writeFile("samsung-mobile.json",JSON.stringify(DetailsMobile_2),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        /////////////////////////////////////////////////////////////////////////////

        //laptop

        // const linkLaptop = await scrapers.scrapeLinkCategory(browser,selectedCategory[1].link)

        // const DetailsLaptop = await scrapers.scraper(browser,linkLaptop[0][0])
        // fs.writeFile("apple-laptop.json",JSON.stringify(DetailsLaptop),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        console.log("Đã xong")

    } catch (error) {
        console.log("loi o scrape controller",error)
    }
}

module.exports = scrapeController