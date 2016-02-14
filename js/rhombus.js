// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";

function createRhombus() {
  var pHeight    = document.getElementById('rHeight').value;
  var pColorEven = document.getElementById('colorEven').value;
  var pColorOdd  = document.getElementById('colorOdd').value;
  var pSymbol    = document.getElementById('symbol').value;

  drawRhombus(pHeight, pColorEven, pColorOdd, pSymbol);
}

function drawRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  var rLine = "";


  // top
  for (var i = 0; i < pHeight; i++) {
    rLine += "<p>";

    // spaces = width of rhombus - current row
    var topSpaces = pHeight - i;
    // fill out spaces
    for (var j = topSpaces; j > 0; j--) {
      rLine += "&nbsp;";
    }

    // fill out the remaining width with characters
    for (var k = 0; k < i * 2; k++) {
      if (k % 2) rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      else       rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
    }

    rLine += "</p>";
  }

  // bottom
  for (var n = pHeight; n > 0; n--) {
    rLine += "<p>";

    // spaces = width of rhombus - current row
    var bottomSpaces = pHeight - n;
    // fill out spaces
    for (var m = bottomSpaces; m > 0; m--) {
      rLine += "&nbsp;";
    }

    // fill out the remaining width with characters
    for (var l = 0; l < n * 2; l++) {
      if (l % 2) rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
      else       rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
    }

    rLine += "</p>";
  }

  document.getElementById('rhombus').innerHTML = rLine;
}
