module.exports =
  (req, res) => {
    console.log(req)
    res.status(200).json({ image: req.file.location })
  }
