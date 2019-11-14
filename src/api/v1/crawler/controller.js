const model = require('./model')

exports.getMelon = (req, res) => {
  model.crawlingMelon().then(data => res.json(data))
}
exports.getYoutube = (req, res) => {
  const { song, name } = req.query
  console.log('getYoutube', {song, name})

  model.crawlingYoutube(encodeURIComponent(song), encodeURIComponent(name)).then(data => {
    res.json({msg:`https://www.youtube.com${data}`})
  })
}
