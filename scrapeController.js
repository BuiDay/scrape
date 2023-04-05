const scrapers= require('./scrape')
const fs = require('fs')

const scrapeController = async (browserInstance) =>{
    const url = "https://cellphones.com.vn/"
    const indexs = [0,1,2,3,4,8]
    try {
        let browser = await browserInstance
        let category = await scrapers.scrapeCategory(browser,url)
        const selectedCategory = category.filter((item,index)=>indexs.some(i=>i===index))
        // fs.writeFile("categories.json",JSON.stringify(selectedCategory),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        //     console.log('Ghi categories thành công')
        // })

   

        
        //lay link tung phan loai dien thoai////////////////////////////////////////////////////
        // const linkCategories = await scrapers.scrapeLinkCategory(browser,selectedCategory[0].link)
       
        //tong hop tat link cac hang mobile
        //lay chi tiet dien thoai
        //apple moblie
        // const DetailsMobile = await scrapers.scraper(browser,linkCategories[0][5])
        // fs.writeFile("asus_mobile.json",JSON.stringify(DetailsMobile),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        // const DetailsMobile_2 = await scrapers.scraper(browser,linkCategories[0][6])
        // fs.writeFile("realme_mobile.json",JSON.stringify(DetailsMobile_2),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        /////////////////////////////////////////////////////////////////////////////

        //laptop

        const linkLaptop = await scrapers.scrapeLinkCategory(browser,selectedCategory[1].link)
        
        // const apple_laptop = await scrapers.scraper(browser,linkLaptop[0][0])
        // fs.writeFile("apple_laptop.json",JSON.stringify(apple_laptop),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        // const hp_laptop = await scrapers.scraper(browser,linkLaptop[0][1])
        // fs.writeFile("hp_laptop.json",JSON.stringify(hp_laptop),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        // const dell_laptop = await scrapers.scraper(browser,linkLaptop[0][2])
        // fs.writeFile("dell_laptop.json",JSON.stringify(dell_laptop),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        // const asus_laptop = await scrapers.scraper(browser,linkLaptop[0][3])
        // fs.writeFile("asus_laptop.json",JSON.stringify(asus_laptop),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        // const lenovo_laptop = await scrapers.scraper(browser,linkLaptop[0][4])
        // fs.writeFile("lenovo_laptop.json",JSON.stringify(lenovo_laptop),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        // const acer_laptop = await scrapers.scraper(browser,linkLaptop[0][5])
        // fs.writeFile("acer_laptop.json",JSON.stringify(acer_laptop),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        // const xiaomi_laptop = await scrapers.scraper(browser,linkLaptop[0][6])
        // fs.writeFile("xiaomi_laptop.json",JSON.stringify(xiaomi_laptop),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        
        // const microsoft_laptop = await scrapers.scraper(browser,linkLaptop[0][7])
        // fs.writeFile("microsoft_laptop.json",JSON.stringify(microsoft_laptop),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        // const lg_laptop = await scrapers.scraper(browser,linkLaptop[0][8])
        // fs.writeFile("lg_laptop.json",JSON.stringify(lg_laptop),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        // const msi_laptop = await scrapers.scraper(browser,linkLaptop[0][9])
        // fs.writeFile("msi_laptop.json",JSON.stringify(msi_laptop),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        // const giga_laptop = await scrapers.scraper(browser,linkLaptop[0][10])
        // fs.writeFile("giga_laptop.json",JSON.stringify(giga_laptop),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        //tablet
        // const linkTablet = await scrapers.scrapeLinkCategory(browser,selectedCategory[2].link)

        // const apple_tablet = await scrapers.scraper(browser,linkTablet[0][0])
        // fs.writeFile("apple_tablet.json",JSON.stringify(apple_tablet),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        // const samsung_tablet = await scrapers.scraper(browser,linkTablet[0][1])
        // fs.writeFile("samsung_tablet.json",JSON.stringify(samsung_tablet),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        // const xiaomi_tablet = await scrapers.scraper(browser,linkTablet[0][2])
        // fs.writeFile("xiaomi_tablet.json",JSON.stringify(xiaomi_tablet),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        //  const oppo_tablet = await scrapers.scraper(browser,linkTablet[0][5])
        // fs.writeFile("oppo_tablet.json",JSON.stringify(oppo_tablet),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        // const lenovo_tablet = await scrapers.scraper(browser,linkTablet[0][4])
        // fs.writeFile("lenovo_tablet.json",JSON.stringify(lenovo_tablet),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

        // const nokia_tablet = await scrapers.scraper(browser,linkTablet[0][6])
        // fs.writeFile("nokia_tablet.json",JSON.stringify(nokia_tablet),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })


        // watch
        // const linkWatch = await scrapers.scrapeLinkCategory(browser,selectedCategory[4].link)
        // const apple_watch = await scrapers.scraper(browser,linkWatch[0][0])
        // fs.writeFile("apple_watch.json",JSON.stringify(apple_watch),(err)=>{
        //     if(err) console.log('Ghi thất bại',err);
        // })

//////////////

        console.log("Đã xong")

    } catch (error) {
        console.log("loi o scrape controller",error)
    }
}

module.exports = scrapeController