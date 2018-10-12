const myMap = L.map("map", {center: [42.0, 0], zoom: 2});
    
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.light',
    accessToken: API_KEY
  }).addTo(myMap);
  
//   var mapStyle = {
//     color: "white",
//     fillColor: "pink",
//     fillOpacity: 0.5,
//     weight: 1.5
//   };

// d3.json("/countryData").then(function(data) {
//     console.log(data)

//     L.geoJson(data, {
//       style: mapStyle
//     }).addTo(myMap);
//   });
var popup = L.popup({
  closeButton: false,
  autoClose: false
})
.setLatLng([-50, -180]) 
.setContent('<strong><h5>2010 Data From Jambeck et al.(2015)</h5></strong><small><p>Mismanaged plastic waste is defined as "plastic that is either littered or inadequately disposed. Inadequately disposed waste is not formally managed and includes disposal in dumps or open, uncontrolled landfills, where it is not fully contained. Mismanaged waste could eventually enter the ocean via inland waterways, wastewater outflows, and transport by wind or tides</p></small>')
.openOn(myMap);

var popup = L.popup({
  closeButton: false,
  autoClose: false
})
.setLatLng([0, 180]) 
.setContent('<strong>HIC: </strong>high income<br><strong>UMI: </strong>upper middle income<br><strong>LMI: </strong>lower middle income<br><strong>LI: </strong>low income<br>')
.openOn(myMap);
  
d3.json("http://127.0.0.1:5000/countryData").then(function(data) {
  console.log(data)
  console.log(data.features[0].properties["Economic status"])
  let geojson = L.choropleth(data, {
    valueProperty: "Waste generation rate [kg/person/day]",
    scale: ["#e6f2ff", "#003366"],
    steps: 10,
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },
    onEachFeature: function(feature, layer) {

      layer.on({
        // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
        mouseover: function(event) {
          if (feature.properties["Economic status"]){
            layer.bindPopup("<h3>" + feature.properties.ADMIN + "</h3>" +
                            "<strong>Economic Status:</strong> " + feature.properties["Economic status"] + "<br/>" +
                            "<strong>Mismanaged plastic waste [kg/person/day]:</strong> " + feature.properties["Mismanaged plastic waste [kg/person/day]"] + "<br/>" +
                            "<strong>Waste generation rate [kg/person/day]:</strong> " + feature.properties["Waste generation rate [kg/person/day]"] + "<br/>" +
                            "<strong>% Plastic in waste stream:</strong> " + feature.properties["% Plastic in waste stream"] + "<br/>"
      
                          );
          }
          else{
            layer.bindPopup("<h2>" + feature.properties.ADMIN + "</h1> Data unavailable");
            
          }
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.9
          });
          this.openPopup();
        },
        // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
        mouseout: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.7
          });
          this.closePopup();
        }
        // ,
        //         // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
        // // Get the target's position-- fitBounds(tells it to reposition the map)
        // click: function(event) {
        //   map.fitBounds(event.target.getBounds());
        // }
      });

    }
  }).addTo(myMap);
  var legend = L.control({ position: "topright" });
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    var limits = geojson.options.limits; // Properties of your chloropleth
    var colors = geojson.options.colors;
    var labels = [];

    // Add min & max
    var legendInfo = "<h4>Mismanaged plastic waste [kg/person/day]</h4>" +
      "<div class=\"labels\">" +
        "<div class=\"min\">" + limits[0] + "</div>" +
        "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
      "</div>";

    div.innerHTML = legendInfo;

    limits.forEach(function(limit, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;
  };

  // Adding legend to the map
  legend.addTo(myMap);

});