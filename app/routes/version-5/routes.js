module.exports = function(router) {
    // Scheme details data
    const schemeDetails = {
        testData: {
            message: "Hello from scheme-details.js!",
            number: 42
        },
        'Wild Bird Seed for Farmland Birds': {
            funding: '£640/ha/year',
            description: 'Provides food resources for farmland birds during winter months.',
            relatedAudits: ['Carbon', 'Biodiversity'],
            auditRecommendations: ['species-conservation'],
            location: ['northeast', 'east', 'southeast'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/wild-bird-seed-for-farmland-birds/'
        },
        'Forage Brassica Crops for Farmland Birds': {
            funding: '£100/ha/year',
            description: 'Establishes brassica crops to provide forage for birds.',
            relatedAudits: ['Biodiversity'],
            auditRecommendations: ['species-conservation'],
            location: ['east', 'southeast', 'south'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/forage-brassica-crops-for-farmland-birds/'
        },
        'Stubbles Followed by Green Manure in an Arable Rotation': {
            funding: '£84/ha/year',
            description: 'Leaves stubble over winter, followed by green manure to improve soil health.',
            relatedAudits: ['Carbon', 'Soil Management'],
            auditRecommendations: ['crop-soil-management', 'soil-organic-matter'],
            location: ['east', 'northeast', 'southeast'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/stubbles-followed-by-green-manure/'
        },
        'Retention of Winter Stubbles for Wildlife and Water Quality': {
            funding: '£84/ha/year',
            description: 'Retains stubble fields through winter to benefit wildlife and reduce runoff.',
            relatedAudits: ['Soil Management', 'Animal Health and Welfare'],
            auditRecommendations: ['soil-structure', 'Disease Prevention'],
            location: ['east', 'southeast', 'northeast'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/retention-of-winter-stubbles/'
        },
        'Beetle Banks': {
            funding: '£573/ha/year',
            description: 'Creates grassy banks in arable fields to support predator insects.',
            relatedAudits: ['Biodiversity'],
            auditRecommendations: ['species-conservation'],
            location: ['east', 'southeast', 'south'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/beetle-banks/'
        },
        'Grass Strips in Arable Fields': {
            funding: '£557/ha/year',
            description: 'Creates grass strips to reduce erosion and provide wildlife habitat.',
            relatedAudits: ['Biodiversity', 'Soil Management'],
            auditRecommendations: ['soil-structure', 'species-conservation'],
            location: ['east', 'northeast', 'southeast'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/grass-strips-in-arable-fields/'
        },
        'Water Margins in Arable Fields': {
            funding: '£512/ha/year',
            description: 'Creates buffer zones alongside watercourses to protect water quality.',
            relatedAudits: ['Biodiversity', 'Animal Health and Welfare'],
            auditRecommendations: ['Disease Prevention', 'Living Conditions'],
            location: ['east', 'southeast', 'northeast'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/water-margins-in-arable-fields/'
        },
        'Species-rich Grassland Management': {
            funding: '£182/ha/year',
            description: 'Maintain and enhance diverse habitats.',
            relatedAudits: ['Carbon', 'Biodiversity', 'Soil Management', 'Integrated Pest Management Plan'],
            auditRecommendations: ['grassland-management', 'soil-biodiversity'],
            location: ['highlands', 'northeast', 'southwest'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/species-rich-grassland-management/'
        },
        'Water Margins in Grassland Fields': {
            funding: '£440/ha/year',
            description: 'Establishes protective buffer strips along watercourses.',
            relatedAudits: ['Biodiversity', 'Animal Health and Welfare'],
            auditRecommendations: ['Living Conditions', 'Disease Prevention'],
            location: ['west', 'southwest', 'northwest'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/water-margins-in-grassland-fields/'
        },
        'Wader and Wildlife Mown Grassland': {
            funding: '£264/ha/year',
            description: 'Manages grassland to benefit waders and other wildlife.',
            relatedAudits: ['Biodiversity'],
            auditRecommendations: ['species-conservation', 'grassland-management'],
            location: ['islands', 'northwest', 'west'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/wader-and-wildlife-mown-grassland/'
        },
        'Wader Grazed Grassland': {
            funding: '£264/ha/year',
            description: 'Promotes grazing regimes that support wader populations.',
            relatedAudits: ['Biodiversity'],
            auditRecommendations: ['species-conservation', 'grassland-management'],
            location: ['islands', 'northwest', 'highlands'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/wader-grazed-grassland/'
        },
        'Heath Management (Coastal, Serpentine, Lowland and Special Interest)': {
            funding: '£274/ha/year',
            description: 'Encourages the management of heathland habitats.',
            relatedAudits: ['Biodiversity', 'Carbon'],
            auditRecommendations: ['habitat-management'],
            location: ['highlands', 'islands', 'northwest'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/heath-management/'
        },
        'Wetland Management': {
            funding: '£78/ha/year',
            description: 'Supports the maintenance of wetland ecosystems.',
            relatedAudits: ['Carbon', 'Biodiversity', 'Animal Health and Welfare'],
            auditRecommendations: ['Living Conditions', 'Disease Prevention'],
            location: ['west', 'northwest', 'highlands'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/wetland-management/'
        },
        'Lowland Bog Management': {
            funding: '£164/ha/year',
            description: 'Aims to preserve lowland bog habitats.',
            relatedAudits: ['Carbon', 'Biodiversity', 'Integrated Pest Management Plan'],
            auditRecommendations: ['habitat-management', 'Biological Controls'],
            location: ['west', 'southwest', 'northwest'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/lowland-bog-management/'
        },
        'Management of Buffer Areas for Fens and Lowland Bogs': {
            funding: '£440/ha/year',
            description: 'Establishes buffer zones to protect sensitive wetland areas.',
            relatedAudits: ['Carbon', 'Biodiversity', 'Animal Health and Welfare', 'Integrated Pest Management Plan'],
            auditRecommendations: ['Living Conditions', 'Disease Prevention'],
            location: ['west', 'northwest', 'highlands'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/management-of-buffer-areas-for-fens-and-lowland-bogs/'
        },
        'Management or Restoration of Hedgerows': {
            funding: '£8/metre/year',
            description: 'Supports the upkeep and restoration of hedgerow networks.',
            relatedAudits: ['Biodiversity', 'Carbon'],
            auditRecommendations: ['habitat-management'],
            location: ['east', 'southeast', 'northeast'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/management-or-restoration-of-hedgerows/'
        },
        'Habitat Mosaic Management': {
            funding: '£90/ha/year',
            description: 'Encourages management of diverse habitat types within a landscape.',
            relatedAudits: ['Biodiversity'],
            auditRecommendations: ['habitat-management'],
            location: ['highlands', 'islands', 'northwest'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/habitat-mosaic-management/'
        },
        'Managing Scrub of Conservation Value': {
            funding: '£74/ha/year',
            description: 'Promotes management of scrubland beneficial to wildlife.',
            relatedAudits: ['Biodiversity'],
            auditRecommendations: ['habitat-management'],
            location: ['highlands', 'islands', 'west'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/managing-scrub-of-conservation-value/'
        },
        'Ancient Wood Pasture': {
            funding: '£46/ha/year',
            description: 'Supports conservation of historic wood pasture systems.',
            relatedAudits: ['Carbon', 'Biodiversity'],
            auditRecommendations: ['habitat-management'],
            location: ['highlands', 'northeast', 'northwest'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/ancient-wood-pasture/'
        },
        'Conservation Management of Small Units': {
            funding: '£365/ha/year',
            description: 'Assists small landholdings in implementing conservation practices.',
            relatedAudits: ['Biodiversity', 'Soil Management'],
            auditRecommendations: ['habitat-management', 'soil-biodiversity'],
            location: ['highlands', 'islands', 'west'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/conservation-management-of-small-units/'
        },
        'Cattle Management on Small Units (Introduction/Retention)': {
            funding: '£45/ha/year',
            description: 'Encourages cattle grazing to manage habitats.',
            relatedAudits: ['Carbon', 'Biodiversity', 'Soil Management'],
            auditRecommendations: ['livestock-emissions', 'grassland-management'],
            location: ['highlands', 'islands', 'northwest'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/cattle-management-on-small-units/'
        },
        'Control of Invasive Non-native Plant Species': {
            funding: '£324/ha/year',
            description: 'Supports efforts to remove invasive plant species.',
            relatedAudits: ['Biodiversity'],
            auditRecommendations: ['habitat-management'],
            location: ['all'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/control-of-invasive-non-native-plant-species/'
        },
        'Converting Arable at Risk of Erosion or Flooding to Low-input Grassland': {
            funding: '£371/ha/year',
            description: 'Encourages conversion to grassland to reduce erosion and flood risk.',
            relatedAudits: ['Soil Management', 'Animal Health and Welfare'],
            auditRecommendations: ['soil-structure', 'Living Conditions'],
            location: ['east', 'northeast', 'southeast'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/converting-arable-at-risk-of-erosion-or-flooding-to-low-input-grassland/'
        },
        'Rural Sustainable Drainage Systems – Swales': {
            funding: '£5-£15/m',
            description: 'Channels water flow and promotes infiltration to reduce runoff.',
            relatedAudits: ['Animal Health and Welfare'],
            auditRecommendations: ['Living Conditions', 'Disease Prevention'],
            location: ['west', 'southwest', 'northwest'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/rural-sustainable-drainage-systems-swales/'
        },
        'Rural Sustainable Drainage Systems – Wetland': {
            funding: '£3,000-£10,000',
            description: 'Slows water movement and filters runoff to improve water quality.',
            relatedAudits: ['Animal Health and Welfare', 'Biodiversity'],
            auditRecommendations: ['Living Conditions', 'Disease Prevention'],
            location: ['west', 'northwest', 'highlands'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/rural-sustainable-drainage-systems-wetland/'
        },
        'Water-use Efficiency – Irrigation Lagoon': {
            funding: '£10,000-£25,000',
            description: 'Supports water storage for irrigation and flood risk mitigation.',
            relatedAudits: ['Animal Health and Welfare'],
            auditRecommendations: ['Routine Health Checks', 'Living Conditions'],
            location: ['east', 'southeast', 'northeast'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/water-use-efficiency-irrigation-lagoon/'
        },
        'Alternative Watering': {
            funding: '£2,000-£5,000',
            description: 'Provides clean water sources away from watercourses for livestock.',
            relatedAudits: ['Animal Health and Welfare'],
            auditRecommendations: ['Routine Health Checks', 'Living Conditions'],
            location: ['all'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/alternative-watering/'
        },
        'Hard Standings for Troughs and Gateways': {
            funding: '£25-£50/m²',
            description: 'Prevents soil compaction and reduces erosion at high traffic areas.',
            relatedAudits: ['Soil Management', 'Animal Health and Welfare', 'Integrated Pest Management Plan'],
            auditRecommendations: ['soil-structure', 'Living Conditions', 'Monitoring'],
            location: ['all'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/hard-standings-for-troughs-and-gateways/'
        },
        'Livestock Crossing': {
            funding: '£1,000-£5,000',
            description: 'Reduces bank erosion and sedimentation with suitable crossings.',
            relatedAudits: ['Animal Health and Welfare'],
            auditRecommendations: ['Living Conditions', 'Routine Health Checks'],
            location: ['highlands', 'west', 'northwest'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/livestock-crossing/'
        },
        'Livestock Tracks': {
            funding: '£10-£25/m',
            description: 'Improves access while reducing soil compaction and erosion.',
            relatedAudits: ['Soil Management', 'Animal Health and Welfare'],
            auditRecommendations: ['soil-structure', 'Living Conditions'],
            location: ['highlands', 'islands', 'northwest'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/livestock-tracks/'
        },
        'Managing Steading Drainage and Rural Sustainable Drainage Systems': {
            funding: '£2,000-£5,000',
            description: 'Manages runoff and reduces flood risk around farm infrastructure.',
            relatedAudits: ['Animal Health and Welfare', 'Integrated Pest Management Plan'],
            auditRecommendations: ['Living Conditions', 'Chemical Strategies', 'Record Keeping'],
            location: ['all'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/managing-steading-drainage-and-rural-sustainable-drainage-systems/'
        },
        'Pesticide Handling Facilities': {
            funding: '£2,000-£10,000',
            description: 'Reduces pesticide contamination to protect water quality.',
            relatedAudits: ['Animal Health and Welfare', 'Integrated Pest Management Plan'],
            auditRecommendations: ['Disease Prevention', 'Chemical Strategies', 'Record Keeping'],
            location: ['all'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/pesticide-handling-facilities/'
        },
        'Rural Sustainable Drainage Systems – Retention Pond': {
            funding: '£3,000/pond',
            description: 'Supports creation of ponds to manage runoff and improve water quality.',
            relatedAudits: ['Animal Health and Welfare'],
            auditRecommendations: ['Living Conditions', 'Disease Prevention'],
            location: ['west', 'southwest', 'northwest'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/rural-sustainable-drainage-systems-retention-pond/'
        },
        'Rural Sustainable Drainage Systems – Sediment Traps and Bunds': {
            funding: '£400-£3,000/trap',
            description: 'Captures soil and slows runoff to protect water quality.',
            relatedAudits: ['Animal Health and Welfare', 'Soil Management'],
            auditRecommendations: ['Living Conditions', 'soil-structure'],
            location: ['east', 'southeast', 'northeast'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/rural-sustainable-drainage-systems-sediment-traps-and-bunds/'
        },
        'Organic Farming: Conversion': {
            funding: '£220-£330/ha/year',
            description: 'Supports the transition to organic farming methods.',
            relatedAudits: ['Carbon', 'Soil Management', 'Integrated Pest Management Plan'],
            auditRecommendations: ['soil-organic-matter', 'soil-biodiversity', 'Cultural Techniques'],
            location: ['all'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/organic-farming-conversion/'
        },
        'Organic Farming: Maintenance': {
            funding: '£55-£200/ha/year',
            description: 'Supports ongoing organic farming practices.',
            relatedAudits: ['Carbon', 'Soil Management', 'Integrated Pest Management Plan'],
            auditRecommendations: ['soil-organic-matter', 'soil-biodiversity', 'Cultural Techniques'],
            location: ['all'],
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/organic-farming-maintenance/'
        }
    };

    router.get('/version-5/scheme-options-results_holding-number', function (req, res) {
        console.log('Route handler called');
        
        // Get the session data
        const sessionData = req.session.data || {};
        
        // Define sections mapping
        const sections = {
            'Arable': [
                'Wild Bird Seed for Farmland Birds',
                'Forage Brassica Crops for Farmland Birds',
                'Stubbles Followed by Green Manure in an Arable Rotation',
                'Retention of Winter Stubbles for Wildlife and Water Quality',
                'Beetle Banks',
                'Grass Strips in Arable Fields',
                'Water Margins in Arable Fields'
            ],
            'Grassland': [
                'Species-rich Grassland Management',
                'Water Margins in Grassland Fields',
                'Wader and Wildlife Mown Grassland',
                'Wader Grazed Grassland'
            ],
            'Upland, peatland, moorland and heath': [
                'Heath Management (Coastal, Serpentine, Lowland and Special Interest)'
            ],
            'Wetland and bogs': [
                'Wetland Management',
                'Lowland Bog Management',
                'Management of Buffer Areas for Fens and Lowland Bogs'
            ],
            'Farm habitats and features': [
                'Management or Restoration of Hedgerows',
                'Habitat Mosaic Management',
                'Managing Scrub of Conservation Value',
                'Ancient Wood Pasture'
            ],
            'Small units': [
                'Conservation Management of Small Units',
                'Cattle Management on Small Units (Introduction/Retention)'
            ],
            'Control of invasive non-native species': [
                'Control of Invasive Non-native Plant Species'
            ],
            'Managing water quality and flood risk': [
                'Converting Arable at Risk of Erosion or Flooding to Low-input Grassland',
                'Rural Sustainable Drainage Systems – Swales',
                'Rural Sustainable Drainage Systems – Wetland',
                'Water-use Efficiency – Irrigation Lagoon',
                'Alternative Watering',
                'Hard Standings for Troughs and Gateways',
                'Livestock Crossing',
                'Livestock Tracks',
                'Managing Steading Drainage and Rural Sustainable Drainage Systems',
                'Pesticide Handling Facilities',
                'Rural Sustainable Drainage Systems – Retention Pond',
                'Rural Sustainable Drainage Systems – Sediment Traps and Bunds'
            ],
            'Organic farming': [
                'Organic Farming: Conversion',
                'Organic Farming: Maintenance'
            ]
        };

        // Create template data
        const templateData = {
            data: sessionData,
            schemeDetails: schemeDetails,
            sections: sections,  // Add the sections data
            debug: {
                isSchemeDetailsLoaded: !!schemeDetails,
                schemeDetailsType: typeof schemeDetails,
                keys: Object.keys(schemeDetails),
                sessionData: sessionData,
                schemeDetailsContent: schemeDetails
            }
        };

        console.log('Template data:', templateData);
        res.render('version-5/scheme-options-results_holding-number', templateData);
    });
}; 