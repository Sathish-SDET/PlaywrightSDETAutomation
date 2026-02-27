const XLSX = require('xlsx')

function getExcelData(filePath,sheetName)
{
    const workBook = XLSX.readFile(filePath);
    const sheet = workBook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(sheet);
}
module.exports = {getExcelData}; 

