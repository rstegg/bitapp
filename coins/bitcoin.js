const  P = require('bluebird')
const exec = require('child_process').exec
const {compose, join,  prepend} = require('ramda')
const run = P.promisify(exec);

const electrum = compose(
    run,
    join(" "),
    prepend('electrum')
  )
