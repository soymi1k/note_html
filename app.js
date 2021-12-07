function generatePDF() {
  const element = document.getElementById("content");
  const opt = {
    margin: 1,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: [100, 100], orientation: "portrait" },
  };
  html2pdf().set(opt).from(element).save();
}
