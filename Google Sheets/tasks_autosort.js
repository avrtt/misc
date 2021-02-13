// Thanks to github.com/mikebranski
// Modified version

var SORT_COLUMN_INDEX = 1;
var ASCENDING = true;
var NUMBER_OF_HEADER_ROWS = 1;
var required_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("TAS");

function autoSort(sheet) {

  var range = required_sheet.getDataRange();

  if (NUMBER_OF_HEADER_ROWS > 0) {
    range = range.offset(NUMBER_OF_HEADER_ROWS, 0, (range.getNumRows() - NUMBER_OF_HEADER_ROWS));
  }

  range.sort( {
    column: SORT_COLUMN_INDEX,
    ascending: ASCENDING
  } );
}

function onEdit(event) {

  var editedCell;

  editedCell = required_sheet.getActiveCell();

  if (editedCell.getColumn() == SORT_COLUMN_INDEX) {
    autoSort(required_sheet);
  }
}

function onOpen(event) {

  autoSort(required_sheet);
}

function onInstall(event) {
  
  onOpen(event);
}

 
