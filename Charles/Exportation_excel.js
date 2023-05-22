import React from 'react';

function ExportationExcel() {
  const downloadExcel = () => {
    const fileUrl = '../src/fichier_excel/Classeur1.xlsx';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <div className="container">
      <button onClick={downloadExcel}>Télécharger Fichier Excel</button>
    </div>
  );
}

export default ExportationExcel;
