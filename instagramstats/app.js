const request = require('node-fetch');
const cheerio = require('cheerio');

(async() => {
    //the credential from IG
    const USERNAME = 'willsmith';
    const BASE_URL = `https://instagram.com/${USERNAME}`;

    let response = await request('BASE_URL');

    let $ = cheerio.load(response);
    //this tells the scraper what element we want. the '.eq' tells the scraper we want the fourth javascript
    let script = $('script[type="text/javascript"]').eq(3).html();
    //from regexer using global under flags
    let script_regex = /window._sharedData = (.+);/g.exec(script)

    console.log('script_regex');
})()