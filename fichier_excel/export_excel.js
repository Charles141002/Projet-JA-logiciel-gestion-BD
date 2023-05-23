import * as XLSX from 'xlsx';


const workbook = XLSX.readFile('src/fichier_excel/Classeur1.xlsx');

export default workbook;