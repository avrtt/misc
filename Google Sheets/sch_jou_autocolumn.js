function newColumn() {

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName('SCH');

  sheet.insertColumnAfter(4);

  var date = new Date();
  var month = date.getMonth() + 1;  if(month.toString().length==1){var month = '0'+month;}
  var day = date.getDate(); if(day.toString().length==1){var day = '0'+day;}
  var date = day+'.'+month;
  Logger.log(date);
  
  sheet.getRange("E1").setValue(date).setNumberFormat('d.M');

} 
