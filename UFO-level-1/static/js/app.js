// Initialize Data and Miscellaneous
var tableData = data;
var filterButton = d3.select("#filter-btn");
var filterForm = d3.select("#datetime");

// Create event handlers
filterButton.on("click", filterData);
filterForm.on("submit", filterData);

// Default data on load-in
tableData.forEach(function(alienSighting) {
  var row = d3.select("tbody").append("tr");
  Object.entries(alienSighting).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Function to filter based on given date
function filterData() {
  d3.select("tbody").html("");
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  var filteredData = tableData.filter(dataPoint => dataPoint.datetime === inputValue);
  // Similar data-population to 'Default data on load-in'
  filteredData.forEach(function(alienSighting) {
    var row = d3.select("tbody").append("tr");
    Object.entries(alienSighting).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
