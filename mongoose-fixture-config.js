/*
 *  mongoose-fixture-config.js.js
 *  Generated by mongoose-fixture (v0.2.0)
 *
 *  Generic configuration
 *  Please customize your mongodb, pathing, and FixtureListing
 *
 */

// Load the default object that helps manage a FixtureConfig
var FixtureConfig = require('mongoose-fixture').FixtureConfig;

// Create our fixture config with defined
// mongo-connection and file paths
var fixtureConfig = FixtureConfig({
    mongoConnection:{
        'host':'localhost',
        'port':'27020',
        'dbname':'fixture-test'
    },
    paths:{
        schemaPath:__dirname+'/schemas/',
        dataFixturePath:__dirname+'/fixtures/'
    }
});

// Create a Listing of fixtures
var allFixtures = [
    {
        // general name used in output log
        itemName:'Product', 
        // name of the schema file (without the .js)
        schema:'ProductSchema', 
        // name of the data-fixture file (without the .js)
        data:'Products',
        // collection name used for removal/remove process
        collection:'products'
    }
];
    
// load fixture listings
fixtureConfig.fixtureListings.set('all', allFixtures); 

// export the config
module.exports = fixtureConfig;

