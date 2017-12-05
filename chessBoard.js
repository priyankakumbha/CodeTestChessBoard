var generateChessBoard = function()
{
  $( "div.chessBoardTable" ).empty();
   var squareSize = $( "#squareSize" ).val();
   var boardSize = $( "#boardSize" ).val();
   // console.log(squareSize);
   // console.log(boardSize);
   generateBoard(boardSize,squareSize);
}

$( "#genearteBoard" ).click(function() {
  generateChessBoard();
});

// generates board
//size- its board size. e.x 4*4 , 3*3,
//squareSize- its square size, e.g. ####-4
var generateBoard = function(size,squareSize)
{
  //console.log("inside generateBoard"+size);
  var finalResult = "";
  var resultArray=[];
  for(i = 1; i <= size; i++)
  {
    var tmplocalResultHeader=generatHeader(squareSize,size,i);
    var tempResultRow =[];
    for(j = 1; j <= size; j++)
    {
      var tmplocalResult2=generateRow(squareSize,j,i);
      tempResultRow.push(tmplocalResult2);
    }
    if(i==size){
      resultArray.push(tempResultRow.join(""));
    } else {
      resultArray.push(tempResultRow.join(""));
    }
  }
  //console.log(finalResult);
  //console.log("resultArray"+resultArray);
  displayTable(resultArray);
}

// geanerating "+-" pattern based on no number of square size
    var generatHeader = function(size,boardSize,rowIndex) {
    var headerText="+";
    for(h = 1; h <= boardSize;h++) {
      for(r = 1;r <= size; r++) {
        headerText = headerText + "-";
      }
      headerText = headerText +  "+";
    }
    //console.log("headerText"+ headerText+" rowIndex"+ rowIndex);
    return headerText;
  }

  //genearting all the row records in single column
  var generateRow = function(size,rowIndex,columnIndex) {
  var tempArr=[];
  if(columnIndex == 1)
  {
    var columnPattern = "+"+getColumnPattern(rowIndex,columnIndex,size)+"+";
  }else{
    var columnPattern = getColumnPattern(rowIndex,columnIndex,size)+ "+";
  }
    if(rowIndex == 1)
    {
      tempArr.push(columnPattern + "\n");
    }

    for(k = 1; k <= size ; k++)
    {
      var pattern = getPattern(rowIndex,columnIndex,size);
      if(columnIndex == 1){
        tempArr.push("|" + pattern + "|\n");
      }else {
        tempArr.push(pattern + "|\n");
      }
    }
    if(rowIndex == size){
      tempArr.push(columnPattern + "\n")
    } else {
        tempArr.push(columnPattern + "\n")
    }
  //  console.log("rowText"+ rowText +":"+ rowIndex);
   var  finalRowText = tempArr.join("");
   //console.log("finalRowText"+finalRowText);
    return finalRowText;
  }

  var getPattern = function(rowIndex,columnIndex,size) {
    var pattern = "";
    for(p = 1;p <= size;p ++) {
      if((rowIndex + columnIndex) %2 == 0) {
        pattern += "#";
      } else {
        pattern += " ";
      }
    }
    return pattern;
  }
  var getColumnPattern = function(rowIndex,columnIndex,size) {
    var columnPattern = "";
    for(p = 1;p <= size; p++) {
        columnPattern += "-";
    }
    return columnPattern;
  }

//appending arrays in a table row
  var displayTable = function(resultArray)
  {
    var tableContent="<table><tr>";
    for(s = 0; s <= resultArray.length -1; s++){
      tableContent += '<td><pre>' + resultArray[s] + '</pre></td>' ;
    }
      tableContent += "</tr></table>";
      $( "div.chessBoardTable" ).append(tableContent );

  }
