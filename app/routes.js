const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter();

// Add this near the top of the file
const eligibilityChecks = {
  isEligible: (data) => {
    // Must be in Scotland
    if (data.location !== 'yes') return false;
    
    // Must be registered
    if (data.registration !== 'yes') return false;
    
    // Must have land control
    if (!['owner', 'tenant'].includes(data.landControl)) return false;
    
    // Must have no conflicting commitments
    if (!data.commitments?.includes('free')) return false;
    
    // Must be willing to do assessments
    if (data.assessments?.includes('none') || !data.assessments?.includes('fea')) return false;
    
    return true;
  }
};

// Add these route handlers
router.post('/version-8/questions/:question', (req, res) => {
  // Store the answer
  req.session.data[req.params.question] = req.body[req.params.question];
  
  // Go to next page
  res.redirect(req.body.nextPage);
});

router.get('/version-8/results', (req, res) => {
  const isEligible = eligibilityChecks.isEligible(req.session.data);
  
  res.render('version-8/results', {
    isEligible: isEligible
  });
});

// Add your routes here
require('./routes/version-5/routes')(router);
require('./routes/version-7/routes')(router);
require('./routes/version-9/routes')(router);

module.exports = router;