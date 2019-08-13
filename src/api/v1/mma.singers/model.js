const uuidv4 = require('uuid/v4')
const dateFormat = require('dateformat')
const { defaultSingers } = require('./data')

let singers = []

exports.getAll = () => singers
exports.findOne = singerId => singers.find(({ id }) => id === singerId)
exports.createOne = ({ name, img, song }) => {
  const now = new Date()
  const _id = uuidv4()
  const model = {
    id: _id,
    careatedAt: dateFormat(now),
    updatedAt: null,
    hit: 0,
    name: name || '',
    img: img || '',
    song: song || ''
  }
  singers.push(model)
  return this.findOne(_id)
}
exports.updateOne = (id, { name, img, song, hit }) => {
  const now = new Date()
  singers = singers.map(singer => {
    if (singer.id !== id) return singer
    const model = {
      updatedAt: dateFormat(now),
      name: name || singer.name,
      img: img || singer.img,
      song: song || singer.song
    }
    return { ...singer, ...model }
  })
  return this.findOne(id)
}
exports.updateHit = id => {
  const now = new Date()
  singers = singers.map(singer => {
    if (singer.id !== id) return singer
    const model = {
      updatedAt: dateFormat(now),
      hit: singer.hit + 1
    }
    return { ...singer, ...model }
  })
  return true
}
exports.deleteOne = singerId => {
  singers = singers.filter(({ id }) => id !== singerId)
  return this.findOne(singerId)
}

defaultSingers.forEach(body => this.createOne({ ...body }))
