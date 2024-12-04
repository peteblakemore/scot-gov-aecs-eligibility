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

// Add these routes for version-5
router.post('/version-5/scheme-options-results_holding-number', function(req, res) {
    // Store the selected audit areas in session
    req.session.data['wfp-audit'] = req.body['wfp-audit[]'];
    req.session.data['audit'] = req.body.audit;
    
    // Render the results page
    res.render('version-5/scheme-options-results_holding-number');
});

router.get('/version-5/scheme-options-results_holding-number', function(req, res) {
    res.render('version-5/scheme-options-results_holding-number');
});

// Handle question-location submission
router.post('/version-5/question-wfp-audit', function (req, res) {
    // Coming from question-location
    if (req.body.data['holding-number']) {
        req.session.data['holding-number'] = req.body.data['holding-number'];
        return res.render('version-5/question-wfp-audit');
    }

    // Coming from question-wfp-audit itself
    if (req.body.data['audit']) {
        req.session.data['audit'] = req.body.data['audit'];
        req.session.data['wfp-audit'] = req.body.data['wfp-audit'];

        if (req.body.data['audit'] === 'yes') {
            return res.redirect('/version-5/question-improve-areas');
        } else {
            return res.redirect('/version-5/scheme-options-results_holding-number');
        }
    }

    // If we get here something went wrong
    res.redirect('/version-5/question-location');
});

router.post('/version-5/question-improve-areas', function (req, res) {
    req.session.data['improve-areas'] = req.body.data['improve-areas'];
    res.redirect('/version-5/scheme-options-results_holding-number');
});

router.get('/version-5/scheme-options-results_holding-number', function (req, res) {
    if (!req.session.data['holding-number']) {
        return res.redirect('/version-5/question-location');
    }
    res.render('version-5/scheme-options-results_holding-number');
});