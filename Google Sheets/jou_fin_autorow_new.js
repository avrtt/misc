function newRow() {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('JOU');
  sheet.insertRowAfter(3);
  
  var date = Utilities.formatDate(new Date(), "GMT+7", "dd/MM/yyyy"); 
  Logger.log(date);
  sheet.getRange("A4").setValue(date).setNumberFormat('d.M');

}