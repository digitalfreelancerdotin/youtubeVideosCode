function myFunction() {
  // Logger.log(new Date());
  Logger.log(getCurrentDate());
  SpreadsheetApp.getActive().getSheetByName("Sheet1").getRange(1,1).setValue(getCurrentDate());
}

function getCurrentDate(){
  eval(UrlFetchApp.fetch("https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js").getContentText());
  var todaysDate = moment().format('l');
  return todaysDate;
}