function newRow() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('JOU');
  sheet.insertRowAfter(3);
  var date = new Date();
  var month = date.getMonth() + 1;  if(month.toString().length==1){var month = '0'+month;}
  var day = date.getDate(); if(day.toString().length==1){var day = '0'+day;}
  var date = day+'.'+month;
  Logger.log(date);
  sheet.getRange("A4").setValue(date).setNumberFormat('d.M');
}