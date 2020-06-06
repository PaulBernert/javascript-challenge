// Initialize Data and Miscellaneous
let tableData = data;
let resetButton = d3.select('#reset-btn');
buildTable(tableData);

//jQuery DateTime
$('#datetime').on('keyup', function(){
  let dateValue = $(this).val()
  let data = searchDate(dateValue, tableData)
  buildTable(data)
})

//jQuery City
$('#city').on('keyup', function(){
  let cityValue = $(this).val()
  let data = searchCity(cityValue, tableData)
  buildTable(data)
})

//jQuery State
$('#state').on('keyup', function(){
  let stateValue = $(this).val()
  let data = searchState(stateValue, tableData)
  buildTable(data)
})

//jQuery Country
$('#country').on('keyup', function(){
  let countryValue = $(this).val()
  let data = searchCountry(countryValue, tableData)
  buildTable(data)
})

//jQuery Shape
$('#shape').on('keyup', function(){
  let shapeValue = $(this).val()
  let data = searchShape(shapeValue, tableData)
  buildTable(data)
})

//Filter button
$('#reset-btn').on("click", function() {
  document.getElementById("ufoForm").reset();
  return buildTable(tableData)
})

//Search by Date
function searchDate(dateValue, data) {
  let filteredData = []
  for (let i = 0; i < data.length; i++) {
    let date = data[i].datetime
    if (date.startsWith(dateValue)) {
      filteredData.push(data[i])
    }
  }
  return filteredData
}

//Search by City
function searchCity(cityValue, data) {
  let filteredData = []
  for (let i = 0; i < data.length; i++) {
    let city = data[i].city
    if (city.startsWith(cityValue)) {
      filteredData.push(data[i])
    }
  }
  return filteredData
}

//Search by State
function searchState(stateValue, data) {
  let filteredData = []
  for (let i = 0; i < data.length; i++) {
    let state = data[i].state
    if (state.startsWith(stateValue)) {
      filteredData.push(data[i])
    }
  }
  return filteredData
}

//Search by Country
function searchCountry(countryValue, data) {
  let filteredData = []
  for (let i = 0; i < data.length; i++) {
    let country = data[i].country
    if (country.startsWith(countryValue)) {
      filteredData.push(data[i])
    }
  }
  return filteredData
}

//Search by Shape
function searchShape(shapeValue, data) {
  let filteredData = []
  for (let i = 0; i < data.length; i++) {
    let shape = data[i].shape
    if (shape.startsWith(shapeValue)) {
      filteredData.push(data[i])
    }
  }
  return filteredData
}

//Build the Table
function buildTable(data) {
  let table = document.getElementById('ufoTable')
  table.innerHTML = ''
  for (let i = 0; i < data.length; i++){
    var row = `<tr>
                <td>${data[i].datetime}</td>
                <td>${data[i].city}</td>
                <td>${data[i].state}</td>
                <td>${data[i].country}</td>
                <td>${data[i].shape}</td>
                <td>${data[i].durationMinutes}</td>
                <td>${data[i].comments}</td>
              </tr>`
    table.innerHTML += row
  }
}
