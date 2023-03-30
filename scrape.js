
const scrapeCategory = async (browser,url) => new Promise(async(resolve,reject)=>{
   try{ 
    let page = await browser.newPage();
    console.log(">> Mo tab moi....")
    await page.goto(url);
    console.log(">>Truy cap vao",url)
    await page.waitForSelector('#__nuxt');
    console.log('>>Website da load xong...')
    const dataCategory = await page.$$eval("#menu-main > .menu-wrapper > .menu-tree > a",els=>{
        dataCategory = els.map(el =>{
            return {
                title:el.querySelector(".label-item span").innerText,
                link:el.querySelector(".label-item").parentNode.href,
                icon:el.querySelector(".label-item .icons-cate").style.backgroundImage
            }   
        })
        return dataCategory
    })
    resolve(dataCategory)
} catch (error) {
    console.log('loi o scrape category',error);
    reject(error)
}})

const scrapeLinkCategory = async (browser,url) => new Promise(async(resolve,reject)=>{
    try{ 
     let page = await browser.newPage();
     console.log(">> Mo tab moi....")
     await page.goto(url);
     console.log(">>Truy cap vao",url)
     await page.waitForSelector('#__nuxt');
     console.log('>>Website da load xong...')
     const linkCategory = await page.$$eval(".block-filter-brands > .brands__content > .list-brand",els=>{
        linkCategory = els.map(el =>{ 
            return data=[
                    el.querySelectorAll(".list-brand__item")[0].href,
                    el.querySelectorAll(".list-brand__item")[1].href,
                    el.querySelectorAll(".list-brand__item")[2].href,
                    el.querySelectorAll(".list-brand__item")[3].href,
                    el.querySelectorAll(".list-brand__item")[4].href,
                    el.querySelectorAll(".list-brand__item")[5].href,
                    el.querySelectorAll(".list-brand__item")[6].href,
                    el.querySelectorAll(".list-brand__item")[7].href,
            ]
         })
         return linkCategory
     })
     resolve(linkCategory)
 } catch (error) {
     console.log('loi o scrape category',error);
     reject(error)
 }})


const scraper = async (browser,url) => new Promise(async(resolve,reject)=>{
    try {
        const details = []
        let newPage = await browser.newPage();
        console.log(">> Mo tab moi....")
        await newPage.goto(url);
        console.log(">>Truy cap vao",url)
        await newPage.waitForSelector('#__nuxt');
        console.log('>>Website da load xong...')

        //lấy link detail từng sản phẩm điện thoại
        const dataLink = await newPage.$$eval(".product-list-filter > .product-info-container",els=>{
            dataLink = els.map(el =>{
                return {
                    link:el.querySelector(".product-info a").href,
                }   
            })
            return dataLink
        })
        const scraperDetail = async (url) => new Promise(async(resolve,reject)=>{
            const {link} = url
            try {
                let newPageDetail = await browser.newPage();
                await newPageDetail.goto(link);
                console.log(">>Truy cap vao",link)
                await newPageDetail.waitForSelector('#__nuxt');
               
                //Lấy title 
                const title = await newPageDetail.$$eval(".box-header .box-product-name ",els=>{
                    title = els.map(el =>{
                        return  el.querySelector("h1") && el.querySelector("h1").innerText
                    })
                    return title
                })

                //lấy images 
                const images = await newPageDetail.$$eval(".gallery-slide .swiper-wrapper .swiper-slide ",els=>{
                    images = els.map(el =>{
                        return el.querySelector("img") && el.querySelector("img").src
                    })
                    return images
                })
                

                //lấy price 
                const price = await newPageDetail.$$eval(".block-box-price .box-info__box-price ",els=>{
                    price = els.map(el =>{
                        return {
                            price_show: el.querySelector(".product__price--show") && el.querySelector(".product__price--show").innerText,
                            price_through: el.querySelector(".product__price--through") && el.querySelector(".product__price--through").innerText,
                        } 
                    })
                    return price
                })

                //lấy màu sắc
                const colors = await newPageDetail.$$eval(".box-product-variants .box-content > ul > li  ",els=>{
                    colors = els.map(el =>{
                        return el.querySelector("a") && el.querySelector("a").title
                    })
                    return colors
                })

                //lấy thông số kỹ thuật
                const technicalInfo  = await newPageDetail.$$eval(".block-content-product-right",els=>{
                    technicalInfo  = els.map(el =>{
                        return el.querySelector(".cps-block-technicalInfo .technical-content") && el.querySelector(".cps-block-technicalInfo .technical-content").innerHTML.toString()
                    })
                    return technicalInfo
                })

                //lấy thông tin mô tả

                const description  = await newPageDetail.$$eval(".block-content-product-left .cps-block-content",els=>{
                    description  = els.map(el =>{
                        return{
                            features_des:el.querySelector(".ksp-content div") && el.querySelector(".ksp-content div").innerHTML.toString(),
                            features_detail:el.querySelectorAll("div")[2] && el.querySelectorAll("div")[2].innerHTML.toString()
                        }
                    })
                    return description
                })

                //lấy phân loại sản phẩm

                const category  = await newPageDetail.$$eval("#breadcrumbs > .block-breadcrumbs > .cps-container > ul",els=>{
                    category  = els.map(el =>{
                        return el.querySelectorAll("li")[1].querySelector('a') && el.querySelectorAll("li")[1].querySelector('a').innerText
                    })
                    return category
                })   

                //Lấy xếp hạng sản phẩm

                const totalRating  = await newPageDetail.$$eval(".boxReview-score",els=>{
                    totalRating  = els.map(el =>{
                        return el.querySelector("p") && el.querySelector("p").innerText
                    })
                    return totalRating
                })

                 //Lấy brand

                 const brand  = await newPageDetail.$$eval("#breadcrumbs > .block-breadcrumbs > .cps-container > ul",els=>{
                    brand  = els.map(el =>{
                        return el.querySelectorAll("li")[2].querySelector('a') && el.querySelectorAll("li")[2].querySelector('a').innerText
                    })
                    return brand
                })

                console.log(brand)
      
                const dataDatail = {
                    title,
                    images,
                    price,
                    colors,
                    technicalInfo,
                    description,
                    category,
                    totalRating,
                    brand
                }
                await newPageDetail.close()
                console.log('>>Đã đóng tab...',link)
                resolve(dataDatail)
                return dataDatail
            } catch (error) {
                console.log(error)
                reject(error)
            }
        })
    
        for (let link of dataLink){
           const detail = await scraperDetail(link)
            details.push(detail)
        }
        resolve(details)
    } catch (error) {
        reject(error)
    }
})

module.exports = {scrapeCategory,scraper,scrapeLinkCategory}