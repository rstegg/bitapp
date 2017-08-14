const gm = require('gm')
const mime = require('mime')
const fs = require('fs')
const DEFAULT_FORMAT = 'jpg'
const path = require('path')
const crypto = require('crypto')

const DiskStorage = function (opts) {
  this.options = opts
  this.options.filename = (opts.filename || getFilename)
  if (!this.options.gm)  { this.options.gm = {} }
}

function getFilename(req, file, cb) {
  crypto.pseudoRandomBytes(16, function(err, raw) {
    cb(err, err ? undefined : raw.toString('hex'))
  })
}

DiskStorage.prototype._handleFile = function(req, file, cb) {
  const self = this
  self.options.filename(req, file, (err, filename) => {
    if (err)  { return cb(err) }

    const filePath = path.resolve(self.options.dirname, filename)
    const location = '/' +self.options.dirname + '/' + filename
    const contentType = mime.lookup(self.options.gm.format || DEFAULT_FORMAT)
    const outStream = fs.createWriteStream(filePath)
    gm(file.stream)
      .resize(self.options.gm.width , self.options.gm.height , self.options.gm.options)
      .stream(self.options.gm.format || DEFAULT_FORMAT)
      .pipe(outStream)

    outStream.on('error', cb)
    outStream.on('finish', () =>  {
      cb(null, {
        size: outStream.bytesWritten,
        key: filePath,
        location: location
      })
    })
  })
}

DiskStorage.prototype._removeFile = function(req, file, cb) {
  fs.unlink(file.location, cb)
}

module.exports = function(opts) {
  return new DiskStorage(opts)
}
