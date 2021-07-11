function divideIntoWorkbooks() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  for(var i=0; i<sheets.length; i++){
    // Logger.log(sheets[i].getName());
    var s = SpreadsheetApp.create(sheets[i].getName());
    var id = s.getId();
    var f = DriveApp.getFileById(id);
    DriveApp.getFolderById(getParentFolderId()).addFile(f);
  }
}

function getParentFolderId(){
  ssID = SpreadsheetApp.getActive().getId();
  var file = DriveApp.getFileById(ssID);
  var folders = file.getParents();
  // var parentFolderName = folders.next().getName();
  var parentFolderId = folders.next().getId();
  return parentFolderId;
}