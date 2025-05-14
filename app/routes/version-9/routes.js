module.exports = function(router) {
    const schemeDetails = {
        'Wild Bird Seed for Farmland Birds': {
            funding: '£341/ha/year',
            description: 'Provides food resources for farmland birds during winter months.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/wild-bird-seed-for-farmland-birds/',
            relatedOptions: [
                'Forage Brassica Crops for Farmland Birds',
                'Retention of Winter Stubbles for Wildlife and Water Quality',
                'Grass Strips in Arable Fields'
            ]
        },
        'Forage Brassica Crops for Farmland Birds': {
            funding: '£259/ha/year',
            description: 'Establishes brassica crops to provide forage for birds.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/forage-brassica-crops-for-farmland-birds/',
            relatedOptions: [
                'Wild Bird Seed for Farmland Birds',
                'Retention of Winter Stubbles for Wildlife and Water Quality'
            ]
        },
        'Stubbles Followed by Green Manure in an Arable Rotation': {
            funding: '£249/ha/year',
            description: 'Leaves stubble over winter, followed by green manure to improve soil health.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/stubbles-followed-by-green-manure/',
            relatedOptions: [
                'Retention of Winter Stubbles for Wildlife and Water Quality',
                'Converting Arable at Risk of Erosion or Flooding to Low-input Grassland'
            ]
        },
        'Retention of Winter Stubbles for Wildlife and Water Quality': {
            funding: '£140/ha/year',
            description: 'Retains stubble fields through winter to benefit wildlife and reduce runoff.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/retention-of-winter-stubbles/'
        },
        'Beetle Banks': {
            funding: '£495/ha/year',
            description: 'Creates grassy banks in arable fields to support predator insects.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/beetle-banks/',
            relatedOptions: [
                'Grass Strips in Arable Fields',
                'Water Margins in Arable Fields'
            ]
        },
        'Grass Strips in Arable Fields': {
            funding: '£495/ha/year',
            description: 'Creates grass strips to reduce erosion and provide wildlife habitat.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/grass-strips-in-arable-fields/'
        },
        'Water Margins in Arable Fields': {
            funding: '£495/ha/year',
            description: 'Creates buffer zones alongside watercourses to protect water quality.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/water-margins-in-arable-fields/',
            relatedOptions: [
                'Water Margins in Grassland Fields',
                'Rural Sustainable Drainage Systems – Wetland',
                'Rural Sustainable Drainage Systems – Retention Pond'
            ]
        },
        'Species-rich Grassland Management': {
            funding: '£259/ha/year',
            description: 'Maintain and enhance diverse habitats.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/species-rich-grassland-management/'
        },
        'Water Margins in Grassland Fields': {
            funding: '£495/ha/year',
            description: 'Establishes protective buffer strips along watercourses.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/water-margins-in-grassland-fields/',
            relatedOptions: [
                'Water Margins in Arable Fields',
                'Alternative Watering',
                'Livestock Crossing'
            ]
        },
        'Wader and Wildlife Mown Grassland': {
            funding: '£285/ha/year',
            description: 'Manages grassland to benefit waders and other wildlife.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/wader-and-wildlife-mown-grassland/',
            relatedOptions: [
                'Wader Grazed Grassland',
                'Species-rich Grassland Management'
            ]
        },
        'Wader Grazed Grassland': {
            funding: '£285/ha/year',
            description: 'Promotes grazing regimes that support wader populations.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/wader-grazed-grassland/',
            relatedOptions: [
                'Wader and Wildlife Mown Grassland',
                'Species-rich Grassland Management'
            ]
        },
        'Heath Management (Coastal, Serpentine, Lowland and Special Interest)': {
            funding: '£274/ha/year',
            description: 'Encourages the management of heathland habitats.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/heath-management/'
        },
        'Wetland Management': {
            funding: '£78/ha/year',
            description: 'Supports the maintenance of wetland ecosystems.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/wetland-management/',
            relatedOptions: [
                'Lowland Bog Management',
                'Management of Buffer Areas for Fens and Lowland Bogs',
                'Rural Sustainable Drainage Systems – Wetland'
            ]
        },
        'Lowland Bog Management': {
            funding: '£164/ha/year',
            description: 'Aims to preserve lowland bog habitats.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/lowland-bog-management/',
            relatedOptions: [
                'Management of Buffer Areas for Fens and Lowland Bogs',
                'Wetland Management'
            ]
        },
        'Management of Buffer Areas for Fens and Lowland Bogs': {
            funding: '£440/ha/year',
            description: 'Establishes buffer zones to protect sensitive wetland areas.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/management-of-buffer-areas-for-fens-and-lowland-bogs/'
        },
        'Management or Restoration of Hedgerows': {
            funding: '£8/metre/year',
            description: 'Supports the upkeep and restoration of hedgerow networks.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/management-or-restoration-of-hedgerows/'
        },
        'Habitat Mosaic Management': {
            funding: '£90/ha/year',
            description: 'Encourages management of diverse habitat types within a landscape.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/habitat-mosaic-management/'
        },
        'Managing Scrub of Conservation Value': {
            funding: '£74/ha/year',
            description: 'Promotes management of scrubland beneficial to wildlife.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/managing-scrub-of-conservation-value/'
        },
        'Ancient Wood Pasture': {
            funding: '£46/ha/year',
            description: 'Supports conservation of historic wood pasture systems.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/ancient-wood-pasture/'
        },
        'Conservation Management of Small Units': {
            funding: '£365/ha/year',
            description: 'Assists small landholdings in implementing conservation practices.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/conservation-management-of-small-units/',
            relatedOptions: [
                'Cattle Management on Small Units (Introduction/Retention)'
            ]
        },
        'Cattle Management on Small Units (Introduction/Retention)': {
            funding: '£45/ha/year',
            description: 'Encourages cattle grazing to manage habitats.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/cattle-management-on-small-units/'
        },
        'Control of Invasive Non-native Plant Species': {
            funding: '£324/ha/year',
            description: 'Supports efforts to remove invasive plant species.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/control-of-invasive-non-native-plant-species/'
        },
        'Converting Arable at Risk of Erosion or Flooding to Low-input Grassland': {
            funding: '£371/ha/year',
            description: 'Encourages conversion to grassland to reduce erosion and flood risk.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/converting-arable-at-risk-of-erosion-or-flooding-to-low-input-grassland/'
        },
        'Rural Sustainable Drainage Systems – Swales': {
            funding: '£5-£15/m',
            description: 'Channels water flow and promotes infiltration to reduce runoff.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/rural-sustainable-drainage-systems-swales/'
        },
        'Rural Sustainable Drainage Systems – Wetland': {
            funding: '£3,000-£10,000',
            description: 'Slows water movement and filters runoff to improve water quality.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/rural-sustainable-drainage-systems-wetland/',
            relatedOptions: [
                'Rural Sustainable Drainage Systems – Retention Pond',
                'Rural Sustainable Drainage Systems – Sediment Traps and Bunds',
                'Rural Sustainable Drainage Systems – Swales'
            ]
        },
        'Water-use Efficiency – Irrigation Lagoon': {
            funding: '£10,000-£25,000',
            description: 'Supports water storage for irrigation and flood risk mitigation.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/water-use-efficiency-irrigation-lagoon/'
        },
        'Alternative Watering': {
            funding: '£2,000-£5,000',
            description: 'Provides clean water sources away from watercourses for livestock.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/alternative-watering/'
        },
        'Hard Standings for Troughs and Gateways': {
            funding: '£25-£50/m²',
            description: 'Prevents soil compaction and reduces erosion at high traffic areas.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/hard-standings-for-troughs-and-gateways/'
        },
        'Livestock Crossing': {
            funding: '£1,000-£5,000',
            description: 'Reduces bank erosion and sedimentation with suitable crossings.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/livestock-crossing/'
        },
        'Livestock Tracks': {
            funding: '£10-£25/m',
            description: 'Improves access while reducing soil compaction and erosion.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/livestock-tracks/'
        },
        'Managing Steading Drainage and Rural Sustainable Drainage Systems': {
            funding: '£2,000-£5,000',
            description: 'Manages runoff and reduces flood risk around farm infrastructure.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/managing-steading-drainage-and-rural-sustainable-drainage-systems/',
            relatedOptions: [
                'Rural Sustainable Drainage Systems – Wetland',
                'Rural Sustainable Drainage Systems – Retention Pond',
                'Pesticide Handling Facilities'
            ]
        },
        'Pesticide Handling Facilities': {
            funding: '£2,000-£10,000',
            description: 'Reduces pesticide contamination to protect water quality.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/pesticide-handling-facilities/'
        },
        'Rural Sustainable Drainage Systems – Retention Pond': {
            funding: '£3,000/pond',
            description: 'Supports creation of ponds to manage runoff and improve water quality.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/rural-sustainable-drainage-systems-retention-pond/'
        },
        'Rural Sustainable Drainage Systems – Sediment Traps and Bunds': {
            funding: '£400-£3,000/trap',
            description: 'Captures soil and slows runoff to protect water quality.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/rural-sustainable-drainage-systems-sediment-traps-and-bunds/'
        },
        'Organic Farming: Conversion': {
            funding: '£220-£330/ha/year',
            description: 'Supports the transition to organic farming methods.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/organic-farming-conversion/',
            relatedOptions: [
                'Organic Farming: Maintenance'
            ]
        },
        'Organic Farming: Maintenance': {
            funding: '£55-£200/ha/year',
            description: 'Supports ongoing organic farming practices.',
            url: 'https://www.ruralpayments.org/topics/all-schemes/agri-environment-climate-scheme/management-options-and-capital-items/organic-farming-maintenance/'
        }
    };

    router.get('/version-9/scheme-options-results_holding-number', function (req, res) {
        const sessionData = req.session.data || {};
        
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

        res.render('version-9/scheme-options-results_holding-number', {
            data: sessionData,
            schemeDetails: schemeDetails,
            sections: sections
        });
    });
}; 