// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("custom/_slider")
require('places.js')
require("custom/_radio_show")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
import {initAutocomplete} from '../plugins/init_autocomplete';
import { initMapbox } from '../plugins/init_mapbox';
// import { windyInit(options, windyAPI) } from '../plugins/init_windy_map';

const options = {
  // Required: API key
  key: 'NslljtGsyZjgQG9bX9WYACzMjQkam73J', // REPLACE WITH YOUR KEY !!!

  // Put additional console output
  verbose: true,

  // Optional: Initial state of the map
  lat: 50.4,
  lon: 14.3,
  zoom: 5,
};


document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  initAutocomplete();
  initMapbox();
  // Initialize Windy API
  windyInit(options, windyAPI => {
  // windyAPI is ready, and contain 'map', 'store',
  // 'picker' and other usefull stuff

  const { map } = windyAPI;
  // .map is instance of Leaflet map

  L.popup()
      .setLatLng([50.4, 14.3])
      .setContent('Hello World')
      .openOn(map);
});

});

// mapbox
