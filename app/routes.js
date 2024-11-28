//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/version-4/scheme-options-results_holding-number', function(req, res) {
    // Store the selected audit areas in session
    req.session.data['wfp-audit'] = req.body['wfp-audit[]'];
    req.session.data['audit'] = req.body.audit;
    
    // Render the results page
    res.render('version-4/scheme-options-results_holding-number');
});

// Also add a get route to handle direct navigation
router.get('/version-4/scheme-options-results_holding-number', function(req, res) {
    res.render('version-4/scheme-options-results_holding-number');
});

