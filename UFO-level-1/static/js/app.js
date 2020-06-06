// Initialize Data and Miscellaneous
let tableData = data;
buildTable(tableData);

//jQuery DateTime
$('#datetime').on('keyup', function(){
  let dateValue = $(this).val()
  let data = searchDate(dateValue, tableData)
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
