window.onload= function(){
    var body = document.getElementsByTagName("body")[0];
    let tbl = document.getElementById("board");
    let tbl2 = document.getElementById("figure2");
    let activeDigit = -1;
    let boardAray  = [
        [-1,1,-1,-1,-1,-1,-1,9,-1],
        [-1,-1,4,-1,-1,-1,2,-1,-1],
        [-1,-1,8,-1,-1,5,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,3,-1],
        [2,-1,-1,-1,4,-1,1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,1,8,-1,-1,6,-1,-1],
        [-1,3,-1,-1,-1,-1,-1,8,-1],
        [-1,-1,6,-1,-1,-1,-1,-1,-1]];
    
    buildBoard(tbl, body, boardAray);
    buildInput(tbl2, body);

    $('.board td').click(function(){
        $('td').removeClass("error");            
        if(this.innerHTML > 0){                 //clicking on a confirmed square
        }else{
            if(activeDigit!= -1){
                var activeSquareID= this.getAttribute('id');
                row = activeSquareID[0] -1;
                col = activeSquareID[1] -1;

                if(validInsert(boardAray, row, col, activeDigit)){
                    this.innerHTML = activeDigit; 
                    boardAray[row][col] = activeDigit;  
                    $('td').not(this).removeClass("user-input");
                    document.getElementById(activeSquareID).classList.add("user-input");      
                    
                    window.sessionStorage.setItem('game', boardAray);
                    window.sessionStorage.setItem('digit', activeDigit);
                }
                else{//error insert
                    
                    document.getElementById(activeSquareID).classList.add("error");
                }
            }
        else{alert("You must select a digit first.");}}           //clicking empty value
    });

    $('.figure2 td').click(function(){            //clicking the number palette
        if(this.innerHTML <=9){                     
            activeDigit = this.innerHTML;
            $('.figure2 td').not(this).removeClass("user-input");
            this.classList.add("user-input");
        console.log("active digit " + activeDigit);}

        else{                                           //if undo was clicked
            console.log("Undo");
            document.getElementsByClassName("user-input")[0].innerHTML = "  ";
            
        }
    });

}

function buildBoard(tbl, body, boardArray){
    //let arr = [1,2,3,4,5,6,7,8,9,-1];
  
     //new Array(9);
    for (var i = 0; i < 9; i++) {
        var row = document.createElement("tr");
        //boardArray[i] = new Array(9);
        
        for (var j = 0; j < 9; j++) {
            //let p = Math.floor(Math.random() * 10);
            //boardArray[i][j] = arr[p];

            var cell = document.createElement("td");
            cell.setAttribute("id", "" + (i+1) + (j+1));
            if(boardArray[i][j] == -1){var cellText = document.createTextNode("  ");}             
            else{var cellText = document.createTextNode(boardArray[i][j]);}
            
            cell.appendChild(cellText);
            row.appendChild(cell);
            
        }
    
        // add the row to the table
        tbl.appendChild(row);

      }
      tbl.setAttribute("class", "board");
      body.appendChild(tbl);
}

function buildInput(tbl2, body2){
  
    var row = document.createElement("tr");
    row.setAttribute("class", "singlerow")
      
    for (var l = 1; l < 10; l++) {
        var cell2 = document.createElement("td");
        var cell2Text = document.createTextNode(l);
        cell2.appendChild(cell2Text);
        row.appendChild(cell2);
        cell2.setAttribute("id", "btn" + l);

    }
    var cell2 = document.createElement("td");
    cell2.appendChild(document.getElementById("img"));
    row.appendChild(cell2);
    
      // add the row to the table
    tbl2.appendChild(row);
    body2.appendChild(tbl2);

}

function sameBlock(x1, y1, x2, y2) {
    if((x1 == x2 && y1==y2)){return false;}
    let firstRow = Math.floor(y1 / 3) * 3;
    let firstCol = Math.floor(x1 / 3) * 3;
    return (y2 >= firstRow && y2 <= (firstRow + 2) && x2 >= firstCol && x2 <= (firstCol + 2));
}
 
function sameRow(x1, y1, x2, y2) {
    if(x1!=x2){return y1 == y2;}
    else{return false;}
}
 
function sameColumn(x1, y1, x2, y2) {
    if(y1!=y2){return x1 == x2;}
    else{return false;}
    
}

function validInsert(brd, row, col, dig){
    let num = dig
    let arrRow = []
    let arrCol = []
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            if(brd[i][j] == num){
                if(sameColumn(i,j, row, col) || sameRow(i,j, row, col) || sameBlock(i,j, row, col)){
                    console.log("invalid")
                    return false;
                }
            }
        /*arrRow.push(brd[row][i]);
        arrCol.push(brd[i][col]);

        if(arrCol.includes(num)){
            console.log("column error for" + num)
            return false;
        }
        if(arrRow.includes(num)){
            console.log("row error for" + num)
            return false;
        }8*/

            //return !(sameRow(row, col, row, j) && sameColumn(row, col, i, col) &&sameBlock(row, col, i, j))
            
        }
}return true;}