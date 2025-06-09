const schemeDetails = require('../../data/scheme-details.js');
const sections = require('../../data/sections.json');

module.exports = function (router) {
    // Process and structure scheme details
    const processedSchemes = {};
    
    Object.entries(schemeDetails).forEach(([schemeName, scheme]) => {
        if (schemeName === 'testData') return;
        
        // Create a processed scheme object with all necessary fields
        const processedScheme = {
            ...scheme,
            name: schemeName,
            category: null,
            isPriority: Math.random() < 0.3, // Randomly assign priority for demo
            relatedOptions: scheme.relatedOptions || []
        };

        // Determine category based on name and description
        const nameAndDesc = (schemeName + ' ' + scheme.description).toLowerCase();
        
        if (nameAndDesc.includes('arable') || nameAndDesc.includes('crop') || nameAndDesc.includes('stubble')) {
            processedScheme.category = 'arable';
        } else if (nameAndDesc.includes('grass') || nameAndDesc.includes('pasture')) {
            processedScheme.category = 'grassland';
        } else if (nameAndDesc.includes('wetland') || nameAndDesc.includes('bog')) {
            processedScheme.category = 'wetland';
        } else if (nameAndDesc.includes('upland') || nameAndDesc.includes('heath') || nameAndDesc.includes('moor')) {
            processedScheme.category = 'upland';
        } else if (nameAndDesc.includes('habitat') || nameAndDesc.includes('hedgerow') || nameAndDesc.includes('wood') || nameAndDesc.includes('conservation')) {
            processedScheme.category = 'habitats';
        } else if (nameAndDesc.includes('water') || nameAndDesc.includes('drainage') || nameAndDesc.includes('flood')) {
            processedScheme.category = 'water';
        } else if (nameAndDesc.includes('organic')) {
            processedScheme.category = 'organic';
        }

        // Add to processed schemes
        processedSchemes[schemeName] = processedScheme;
    });

    router.get('/version-11/start', function (req, res) {
        res.render('version-11/start');
    });

    router.get('/version-11/question-location', function (req, res) {
        res.render('version-11/question-location');
    });

    router.post('/version-11/scheme-options-results_holding-number', function (req, res) {
        // Group schemes by category for easier rendering
        const schemesByCategory = {
            arable: [],
            grassland: [],
            wetland: [],
            upland: [],
            habitats: [],
            water: [],
            organic: []
        };

        Object.values(processedSchemes).forEach(scheme => {
            if (scheme.category && schemesByCategory[scheme.category]) {
                schemesByCategory[scheme.category].push(scheme);
            }
        });

        res.render('version-11/scheme-options-results_holding-number', {
            schemesByCategory: schemesByCategory,
            sections: sections,
            data: req.session.data,
            totalSchemes: Object.keys(processedSchemes).length
        });
    });

    router.post('/version-11/selected-schemes', function (req, res) {
        res.render('version-11/selected-schemes', {
            schemeDetails: processedSchemes,
            data: req.session.data
        });
    });
}; 