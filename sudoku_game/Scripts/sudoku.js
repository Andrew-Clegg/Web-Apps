window.onload= function(){
    var body = document.getElementsByTagName("body")[0];
    let tbl = document.getElementById("board");
  
    // creating all cells
    for (var i = 1; i < 10; i++) {
      var row = document.createElement("tr");

      
      for (var j = 1; j < 10; j++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(j);
        cell.appendChild(cellText);
        row.appendChild(cell);
        cell.setAttribute("id", "cell" + i + j);
      }
  
      // add the row to the table
      tbl.appendChild(row);
    }
  
    body.appendChild(tbl);

    buildInput();

}

function buildInput(){
    let tbl2 = document.getElementById("figure2");
  
    var row = document.createElement("tr");
    row.setAttribute("class", "singlerow")
      
    for (var j = 1; j < 10; j++) {
        var cell2 = document.createElement("td");
        var cell2Text = document.createTextNode(j);
        cell2.appendChild(cell2Text);
        row.appendChild(cell2);

    }
    var cell2 = document.createElement("td");
    cell2.appendChild(document.getElementById("img"));
    row.appendChild(cell2);
      // add the row to the table
    tbl2.appendChild(row);
    body.appendChild(tbl2);

}

function sameBlock(x1, y1, x2, y2) {
    let firstRow = Math.floor(y1 / 3) * 3;
    let firstCol = Math.floor(x1 / 3) * 3;
    return (y2 >= firstRow && y2 <= (firstRow + 2) && x2 >= firstCol && x2 <= (firstCol + 2));
}
 
function sameRow(x1, y1, x2, y2) {
    return y1 == y2;
}
 
function sameColumn(x1, y1, x2, y2) {
    return x1 == x2;
}
