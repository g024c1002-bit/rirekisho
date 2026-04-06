document.getElementById("download").addEventListener("click", () => {
    const element = document.querySelector(".a4");

    const opt = {
    margin: 0,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
});
document.getElementById("photo-input").addEventListener("change", function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
    document.getElementById("photo-preview").src = event.target.result;
    };
    reader.readAsDataURL(file);
});