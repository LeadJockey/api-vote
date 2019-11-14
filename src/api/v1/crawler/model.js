const axios = require('axios')
const iconv = require('iconv-lite')
const cheerio = require('cheerio')
const uuidv4 = require('uuid/v4')
const dateFormat = require('dateformat')
const singersModel = require('../mma.singers/model');

const crawlerEucKr = url =>
  axios
    .request({
      method: 'GET',
      url: url,
      responseType: 'arraybuffer',
      responseEncoding: 'binary'
    })
    .then(res => iconv.decode(res.data, 'euc-kr').toString())
    .catch(err => console.log('request error', err))

const crawlerUtf8 = url =>
  axios
    .get(url)
    .then(res => res.data)
    .catch(err => console.log('request error', err))

exports.crawlingMelon = () =>
  crawlerUtf8('https://www.melon.com/new/index.htm').then(data => {
    const $ = cheerio.load(data)
    const now = new Date()
    const results = []
    $('table tr').each(function(idx, el) {
      const song = $(el).find('.wrap_song_info .rank01 span a').text().trim()
      const name = $(el).find('.wrap_song_info .rank02 span a').text().trim()
      results.push({
        id: uuidv4(),
        rank: Number($(el).find('.rank').text().trim()),
        hit: 0,
        img: $(el).find('img').attr('src'),
        song,
        name,
        youtube: `https://www.youtube.com/results?search_query=${name}+${song}`,
        // youtube: `http://localhost:3002/api/v1/crawler/youtube?song=${song}&name=${name}`,
        careatedAt: dateFormat(now),
        updatedAt: dateFormat(now),
      })
    })
    const crawledData = results.filter(({rank,img,song,name})=> rank && img && song && name)
    singersModel.updateAll(crawledData)
    return crawledData
  })

  exports.crawlingYoutube = (song , name) => crawlerUtf8(`https://www.youtube.com/results?search_query=${song}+${name}`).then(data => {
    const $ = cheerio.load(data)
    console.log('**', $.html())
    // const a = $('.ytd-item-section-renderer .ytd-thumbnail')
    const a = $('a[16]').attr('href')
    return a
  })
