const puppeteer = require('puppeteer');
var fs = require('fs');

const baseURL = "https://dxportal.tsp.sg";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(baseURL + "/components/index.html");

    const allPages = [];
    const basePages = await page.evaluate(selector => {
        let returnVal = [];
        document.querySelectorAll(selector).forEach(l => returnVal.push(l.attributes.href.value));
        return returnVal;
    }, ".DocsComponentsList__Link");

    // console.log("===========BASE PAGES===========");
    // console.log(basePages);

    for(const [idx, route] of basePages.entries()) {
        // console.log("Now on route: " + route);
        allPages.push(route);
        await page.goto(baseURL + route);
        await page.waitForSelector(".DocsComponentsList__LinkWrapper--is-selected .DocsComponentsList__Link");
        await page.click(".DocsComponentsList__LinkWrapper--is-selected .DocsComponentsList__Link");
        await page.waitForSelector(".DocsComponentsList__LinkWrapper--show-content");
        const res = await page.evaluate(val => {
            const returnVal = [];
            const selectedLink = document.querySelector(".DocsComponentsList__LinkWrapper--is-selected");
            const navElement = selectedLink.nextElementSibling;
            if(navElement != null) {
                navElement.querySelectorAll(".DocsComponentsList__Link").forEach(l => returnVal.push(l.attributes.href.value));
            }
            return returnVal;
        }, 1);
        // console.log("SUB PAGES FOR: " + route)
        // console.log(res);
        if(res.length > 0)
            basePages.splice(idx + 1, 0, ...res);
    }

    // Templates
    await page.goto(baseURL + "/templates/index.html");
    const templatePages = await page.evaluate(selector => {
        let returnVal = [];
        document.querySelectorAll(selector).forEach(l => returnVal.push(l.attributes.href.value));
        return returnVal;
    }, ".DocsCardMenu a")
    // Write to disk

    const json = JSON.stringify({ components: allPages, templates: templatePages });
    fs.writeFile('componentLinks.json', json, 'utf8', () => console.log("done"));
    return;
})();