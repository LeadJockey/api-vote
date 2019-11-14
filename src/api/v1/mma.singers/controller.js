const model = require('./model')

exports.showList = (req, res) => res.status(200).json(model.getAll())
exports.showOne = (req, res) => {
  const singer = model.findOne(req.params.id)
  singer ? res.status(200).json(singer) : res.status(204).json({ msg: 'no content' })
}
exports.create = (req, res) => {
  const singer = model.createOne(({ name, img, song } = req.body))
  singer ? res.status(200).json({ msg: 'create success' }) : res.status(500).json({ msg: 'create error' })
}
exports.update = (req, res) => {
  const singer = model.updateOne(req.params.id, ({ name, song, img } = req.body))
  singer ? res.status(200).json({ msg: 'update success' }) : res.status(500).json({ msg: 'update error' })
}
exports.delete = (req, res) => {
  const singer = model.deleteOne(req.params.id)
  singer ? res.status(500).json({ msg: 'delete error' }) : res.status(200).json({ msg: 'delete success' })
}
exports.multipleDelete = (req, res) => {
  const willDeleteSingers = model.multipleDelete(req.body.willDeleteSingers)
  willDeleteSingers ? res.status(200).json({ msg: 'multiple delete success' }) : res.status(500).json({ msg: 'multiple delete error' })
}
exports.vote = (req, res) => {
  const isVoted = model.updateHit(req.params.id)
  isVoted ? res.status(200).json({ msg: 'update hit success' }) : res.status(500).json({ msg: 'update hit error' })
}
