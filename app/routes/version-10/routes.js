const schemeDetails = require('../../data/scheme-details.json');
const sections = require('../../data/sections.json');

module.exports = function (router) {
    router.get('/version-10/start', function (req, res) {
        res.render('version-10/start');
    });

    router.get('/version-10/question-location', function (req, res) {
        res.render('version-10/question-location');
    });

    router.get('/version-10/scheme-options-results_holding-number', function (req, res) {
        res.render('version-10/scheme-options-results_holding-number', {
            schemeDetails: schemeDetails,
            sections: sections,
            data: req.session.data
        });
    });
}; 