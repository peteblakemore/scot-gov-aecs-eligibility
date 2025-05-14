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

// Add this at the top of the file
const schemeDetails = {
    'Wild Bird Seed for Farmland Birds': {
        category: 'arable',
        funding: '£341/ha/year',
        description: 'Provides food resources for farmland birds during winter months.',
        relatedOptions: ['Forage Brassica Crops for Farmland Birds', 'Retention of Winter Stubbles for Wildlife and Water Quality', 'Grass Strips in Arable Fields']
    },
    'Forage Brassica Crops for Farmland Birds': {
        category: 'arable',
        funding: '£259/ha/year',
        description: 'Establishes brassica crops to provide forage for birds.'
    },
    'Stubbles Followed by Green Manure in an Arable Rotation': {
        category: 'arable',
        funding: '£249/ha/year',
        description: 'Leaves stubble over winter, followed by green manure to improve soil health.'
    },
    'Retention of Winter Stubbles for Wildlife and Water Quality': {
        category: 'arable',
        funding: '£140/ha/year',
        description: 'Retains stubble fields through winter to benefit wildlife and reduce runoff.'
    },
    'Beetle Banks': {
        category: 'arable',
        funding: '£495/ha/year',
        description: 'Creates grassy banks in arable fields to support predator insects.'
    },
    'Grass Strips in Arable Fields': {
        category: 'arable',
        funding: '£495/ha/year',
        description: 'Creates grass strips to reduce erosion and provide wildlife habitat.'
    },
    'Water Margins in Arable Fields': {
        category: 'arable',
        funding: '£495/ha/year',
        description: 'Creates buffer zones alongside watercourses to protect water quality.'
    },

    // Grassland options
    'Species-rich Grassland Management': {
        category: 'grassland',
        funding: '£259/ha/year',
        description: 'Maintain and enhance diverse habitats.'
    },
    'Water Margins in Grassland Fields': {
        category: 'grassland',
        funding: '£495/ha/year',
        description: 'Establishes protective buffer strips along watercourses.'
    },
    'Wader and Wildlife Mown Grassland': {
        category: 'grassland',
        funding: '£285/ha/year',
        description: 'Manages grassland to benefit waders and other wildlife.'
    },
    'Wader Grazed Grassland': {
        category: 'grassland',
        funding: '£285/ha/year',
        description: 'Promotes grazing regimes that support wader populations.'
    },

    // Upland, peatland, moorland and heath
    'Heath Management (Coastal, Serpentine, Lowland and Special Interest)': {
        category: 'upland',
        funding: '£274/ha/year',
        description: 'Encourages the management of heathland habitats.'
    },

    // Wetland and bogs
    'Wetland Management': {
        category: 'wetland',
        funding: '£78/ha/year',
        description: 'Supports the maintenance of wetland ecosystems.'
    },
    'Lowland Bog Management': {
        category: 'wetland',
        funding: '£164/ha/year',
        description: 'Aims to preserve lowland bog habitats.'
    },
    'Management of Buffer Areas for Fens and Lowland Bogs': {
        category: 'wetland',
        funding: '£440/ha/year',
        description: 'Establishes buffer zones to protect sensitive wetland areas.'
    },

    // Farm habitats and features
    'Management or Restoration of Hedgerows': {
        category: 'farm',
        funding: '£0/ha/year',  // Funding rate to be confirmed
        description: 'Supports the upkeep and restoration of hedgerow networks.'
    },
    'Habitat Mosaic Management': {
        category: 'farm',
        funding: '£90/ha/year',
        description: 'Encourages management of diverse habitat types within a landscape.'
    },
    'Managing Scrub of Conservation Value': {
        category: 'farm',
        funding: '£74/ha/year',
        description: 'Promotes management of scrubland beneficial to wildlife.'
    },
    'Ancient Wood Pasture': {
        category: 'farm',
        funding: '£46/ha/year',
        description: 'Supports conservation of historic wood pasture systems.'
    },

    // Small units
    'Conservation Management of Small Units': {
        category: 'small',
        funding: '£365/ha/year',
        description: 'Assists small landholdings in implementing conservation practices.'
    },
    'Cattle Management on Small Units (Introduction/Retention)': {
        category: 'small',
        funding: '£45/ha/year',
        description: 'Encourages cattle grazing to manage habitats.'
    },

    // Control of invasive non-native species
    'Control of Invasive Non-native Plant Species': {
        category: 'invasive',
        funding: '£324/ha/year',
        description: 'Supports efforts to remove invasive plant species.'
    },

    // Managing water quality and flood risk
    'Converting Arable at Risk of Erosion or Flooding to Low-input Grassland': {
        category: 'water',
        funding: '£371/ha/year',
        description: 'Encourages conversion to grassland to reduce erosion and flood risk.'
    },
    'Rural Sustainable Drainage Systems – Swales': {
        category: 'water',
        funding: '£0/ha/year',  // Funding rate to be confirmed
        description: 'Channels water flow and promotes infiltration to reduce runoff.'
    },
    'Rural Sustainable Drainage Systems – Wetland': {
        category: 'water',
        funding: '£0/ha/year',  // Funding rate to be confirmed
        description: 'Slows water movement and filters runoff to improve water quality.'
    },
    'Water-use Efficiency – Irrigation Lagoon': {
        category: 'water',
        funding: '£0/ha/year',  // Funding rate to be confirmed
        description: 'Supports water storage for irrigation and flood risk mitigation.'
    },
    'Alternative Watering': {
        category: 'water',
        funding: '£0/ha/year',  // Funding rate to be confirmed
        description: 'Provides clean water sources away from watercourses for livestock.'
    },
    'Hard Standings for Troughs and Gateways': {
        category: 'water',
        funding: '£0/ha/year',  // Funding rate to be confirmed
        description: 'Prevents soil compaction and reduces erosion at high traffic areas.'
    },
    'Livestock Crossing': {
        category: 'water',
        funding: '£0/ha/year',  // Funding rate to be confirmed
        description: 'Reduces bank erosion and sedimentation with suitable crossings.'
    },
    'Livestock Tracks': {
        category: 'water',
        funding: '£0/ha/year',  // Funding rate to be confirmed
        description: 'Improves access while reducing soil compaction and erosion.'
    },
    'Managing Steading Drainage and Rural Sustainable Drainage Systems': {
        category: 'water',
        funding: '£0/ha/year',  // Funding rate to be confirmed
        description: 'Manages runoff and reduces flood risk around farm infrastructure.'
    },
    'Pesticide Handling Facilities': {
        category: 'water',
        funding: '£0/ha/year',  // Funding rate to be confirmed
        description: 'Reduces pesticide contamination to protect water quality.'
    },
    'Rural Sustainable Drainage Systems – Retention Pond': {
        category: 'water',
        funding: '£0/ha/year',  // Funding rate to be confirmed
        description: 'Supports creation of ponds to manage runoff and improve water quality.'
    },
    'Rural Sustainable Drainage Systems – Sediment Traps and Bunds': {
        category: 'water',
        funding: '£0/ha/year',  // Funding rate to be confirmed
        description: 'Captures soil and slows runoff to protect water quality.'
    },

    // Organic farming
    'Organic Farming: Conversion': {
        category: 'organic',
        funding: '£220-£330/ha/year',
        description: 'Supports the transition to organic farming methods.'
    },
    'Organic Farming: Maintenance': {
        category: 'organic',
        funding: '£55-£200/ha/year',
        description: 'Supports ongoing organic farming practices.'
    },

    // Water Quality
    'Retention of winter stubbles': {
        category: 'water',
        funding: '£84/ha/year',
        description: 'Leave stubble in fields over winter to provide food and habitat for wildlife.'
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

router.get('/version-10/scheme-options-results_holding-number', function (req, res) {
    res.render('version-10/scheme-options-results_holding-number', {
        schemeDetails: schemeDetails
    });
});

router.post('/version-10/selected-schemes', function (req, res) {
    res.render('version-10/selected-schemes', {
        schemeDetails: schemeDetails
    });
});

// Add your routes here
require('./routes/version-5/routes')(router);
require('./routes/version-7/routes')(router);
require('./routes/version-9/routes')(router);
require('./routes/version-10/routes')(router);

module.exports = router;