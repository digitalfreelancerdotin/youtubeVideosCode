function randomValues() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var inputSheet = ss.getSheetByName('Sheet1');
  var randVals = ["East","West","North","South"];
  
  for(var i=2; i <= inputSheet.getLastRow(); i++){
    var cell = inputSheet.getRange("B"+i);
    cell.setValue(randVals[Math.floor(Math.random() * randVals.length)]);
  }
}