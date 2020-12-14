var express = require('express');
const request = require('request');
const cheerio = require('cheerio');
var router = express.Router();
const scrap_url = "https://zeenews.india.com/";


/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  request(scrap_url, function (err, resp, body) {
    if (err) {
      console.log(err, "error occured while hitting URL");
    }
    else {
      let $ = cheerio.load(body);
      // res.send($('.des'));
      const statsTable = $('.mini-con > h3');
      statsTable.each(function () {
        let title = $(this).text();
        console.log(title, '<br/>');
      });
      res.render('index', { title: 'Express', data: body });
    }
  });
});

module.exports = router;
