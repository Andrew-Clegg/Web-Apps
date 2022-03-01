window.onload = function(){
    let table = document.getElementById('stats');
    var bod = document.getElementsByTagName("body")[0];
    let scores = [{"date": "2021/03/02", "duration": "2:51"},{"date": "2022/02/22", "duration": "3:16"},{"date": "2022/01/27", "duration": "4:01"},
    {"date": "2021/09/10", "duration": "2:47"},{"date": "2022/02/28", "duration": "3:33"}];
    buildHSTable(scores, table, bod);

}

function buildHSTable(data, tbl, body){
    for (var i = 0; i < data.length; i++) {
        var row = document.createElement("tr");
        
        for (var j = 0; j < 2; j++) {
 
                var cell = document.createElement("td");
                if(j==1){var cellText = document.createTextNode(data[i]['duration']);             //duration
                console.log(data[i]['duration'])}
                else{var cellText = document.createTextNode(data[i]['date']);}               //date
            
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
    
        // add the row to the table
        tbl.appendChild(row);
      }
      tbl.setAttribute("id", "stats");
      body.appendChild(tbl);
      
}
