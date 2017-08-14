const { merge, equals, always, T, cond } = require('ramda')
const shortId = require('shortid')
const imager = require('multer-imager')
const local = require('./diskStorage')
const base = {
  dirname: 'uploads',
  contentType: imager.AUTO_CONTENT_TYPE,
  metadata: (req, file, cb) => {
    cb(null, { fieldName: file.fieldname })
  },
  filename: (req, file, cb) => {
    cb(null, shortId.generate() + '__' + Date.now().toString())
  },
  gm: {
    format: 'png',
    width: 250,
    height: 250,
    options: '%@'
  }
}

const production = () =>
  imager(merge(base, {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    bucket: process.env.AWS_BUCKET,
    acl: process.env.AWS_ACL
  }))

const development = () =>
  local(base)

const upload = cond([
  [ equals('production'), production ],
  [ equals('development'), development ]
])


module.exports = upload(process.env.NODE_ENV)
