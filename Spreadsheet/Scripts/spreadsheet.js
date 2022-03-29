array = [[100000000,4.5, 3.75, 3.4], [100000001,4.25,4.12,4.25], [100000002,5.0,4.75,4.5]];
window.onload=function(){
    body = document.getElementById("body");
    tbl = document.getElementById("table");
    
    buildTable(array, tbl, body);

    //clicking column select
    $('th').not('.columnH').click(function(){
        deSelectAll();
        index = this.getAttribute('row');
        selectColumn(index);
        console.log(this.each())
    })

    $('th').not('.rowH th').click(function(){           //clicking row select (i have backwards variable names)
        deSelectAll();
        index = this.getAttribute('column');
        selectRow(index)
        
    })  

    $('td').click(function(){
        let temp = this.innerText;
        this.innerHTML=`<form><input type=text placeholder=${temp}></form>`;
        this.setAttribute('class','insertNum') 
       
     })

     $().keyup(function(event) {
        if (event.keyCode === 13) {
            console.log("WAD");
        }
    });

}

function buildTable(arr,tabl, bod){
    document.body.innerHTML="";

    //input is a double array containing student number [i][0] then all assignment marks
    let len = arr[0].length;
    console.log(len);
    for (i=0; i <arr.length; i++){
        let row=document.createElement("tr");
        let row2=document.createElement("tr");
        for(j=0; j<len; j++){
            if (i==0){   
                row2.setAttribute("class","rowH");                                                               //make head row
                var cell = document.createElement("th");
                if(j==0){var cellText = document.createTextNode("Student ID");}
                else{
                    var cellText = document.createTextNode("Asmt " + j);
                }
                cell.setAttribute("row",""+ j)
                cell.appendChild(cellText);
                row2.appendChild(cell); 
                
            }
            if(j==0){                                                   //column
                var cell = document.createElement("th");
                var cellText = document.createTextNode(arr[i][j]);
                cell.setAttribute("class","columnH");

            }else{
                var cell = document.createElement("td");
                var cellText = document.createTextNode("   " +arr[i][j]);
                cell.setAttribute("id", ""+i+j);
            }
            cell.setAttribute('row',""+j);
            cell.setAttribute('column',""+i);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        if(i==0){tabl.appendChild(row2);}
        tabl.appendChild(row);
    }

    bod.appendChild(tabl)
    return tabl
}

function selectRow(index){

    $(`[column=${index}]`).not('th').addClass("selected");

}

function selectColumn(index){
        $(`[row=${index}]`).not('th').addClass("selected");
}

function deSelectAll(){
    $('td').removeClass('selected');
    $('th').removeClass('selected');
}

function updateTable(table){
    let c=this.getAttribute("id");



}

