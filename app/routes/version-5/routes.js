// Make sure the auditMappings are being passed correctly
router.get('/version-5/scheme-options-results_holding-number', function (req, res) {
    const auditMappings = {
        'Carbon': [
            'Wild Bird Seed for Farmland Birds',
            'Stubbles Followed by Green Manure in an Arable Rotation',
            'Species-rich Grassland Management',
            'Wetland Management',
            'Lowland Bog Management',
            'Management of Buffer Areas for Fens and Lowland Bogs',
            'Ancient Wood Pasture',
            'Organic Farming: Conversion',
            'Organic Farming: Maintenance'
        ],
        'Biodiversity': [
            'Wild Bird Seed for Farmland Birds',
            'Forage Brassica Crops for Farmland Birds',
            'Beetle Banks',
            'Grass Strips in Arable Fields',
            'Species-rich Grassland Management',
            'Wader and Wildlife Mown Grassland',
            'Wader Grazed Grassland',
            'Heath Management (Coastal, Serpentine, Lowland and Special Interest)',
            'Wetland Management',
            'Lowland Bog Management',
            'Management of Buffer Areas for Fens and Lowland Bogs',
            'Habitat Mosaic Management',
            'Managing Scrub of Conservation Value',
            'Ancient Wood Pasture',
            'Conservation Management of Small Units',
            'Control of Invasive Non-native Plant Species'
        ],
        'Soil Management': [
            'Stubbles Followed by Green Manure in an Arable Rotation',
            'Retention of Winter Stubbles for Wildlife and Water Quality',
            'Grass Strips in Arable Fields',
            'Species-rich Grassland Management',
            'Converting Arable at Risk of Erosion or Flooding to Low-input Grassland',
            'Hard Standings for Troughs and Gateways',
            'Livestock Tracks',
            'Organic Farming: Conversion',
            'Organic Farming: Maintenance'
        ],
        'Animal Health and Welfare': [
            'Water Margins in Arable Fields',
            'Water Margins in Grassland Fields',
            'Retention of Winter Stubbles for Wildlife and Water Quality',
            'Converting Arable at Risk of Erosion or Flooding to Low-input Grassland',
            'Wetland Management',
            'Management of Buffer Areas for Fens and Lowland Bogs',
            'Alternative Watering',
            'Rural Sustainable Drainage Systems – Swales',
            'Rural Sustainable Drainage Systems – Wetland',
            'Rural Sustainable Drainage Systems – Retention Pond',
            'Rural Sustainable Drainage Systems – Sediment Traps and Bunds',
            'Water-use Efficiency – Irrigation Lagoon',
            'Managing Steading Drainage and Rural Sustainable Drainage Systems',
            'Pesticide Handling Facilities'
        ],
        'Integrated Pest Management Plan': [
            'Species-rich Grassland Management',
            'Lowland Bog Management',
            'Management of Buffer Areas for Fens and Lowland Bogs',
            'Managing Steading Drainage and Rural Sustainable Drainage Systems',
            'Organic Farming: Conversion',
            'Organic Farming: Maintenance'
        ]
    };

    res.render('version-5/scheme-options-results_holding-number', {
        data: {
            'audit-mappings': auditMappings
        }
    });
}); 