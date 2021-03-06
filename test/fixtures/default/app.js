const Rooftop = require('../../..')
const htmlStandards = require('spike-html-standards')
const locals = {}

module.exports = {
  matchers: { html: '*(**/)*.sgr' },
  reshape: htmlStandards({ locals: () => locals }),
  plugins: [new Rooftop({
    url: process.env.url,
    apiToken: process.env.token,
    addDataTo: locals
  })]
}
