  //6.Create a Javascript Function to add table 
   function addTableRows(){
    //create table element
    var table = document.createElement('table');
    table.style.border = '1px solid red';
    //create table rows and cells
    for (var i = 0; i < 3;i++){
        var row = table.insertRow();
        for(var j = 0; j < 3; j++){
            var cell = row.insertCell();
            // cell.appendChild(document.createTextNode(`R ${i+1},C ${j+1}`));
            cell.style.border = '1px solid yellow';
            cell.style.padding = '20px';
        }
    }
    document.getElementById('addTable').appendChild(table);
  
}
