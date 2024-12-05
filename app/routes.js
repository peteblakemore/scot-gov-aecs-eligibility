const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes here
require('./routes/version-7/routes')(router);

module.exports = router;