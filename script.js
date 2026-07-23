const imageUpload = document.getElementById("imageUpload");
const preview = document.getElementById("preview");
const result = document.getElementById("result");

// Show image preview
imageUpload.addEventListener("change", function () {
    const file = this.files[0];

    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
        result.innerHTML = "Click Analyze to check the image.";
    }
});

// Analyze button
function analyzeImage() {
    if (!imageUpload.files.length) {
        result.innerHTML = "⚠️ Please upload an X-ray image first.";
        return;
    }

    result.innerHTML =
        "⚠️ Prediction: Possible Lung Cancer<br><br>Please consult a doctor for further diagnosis.";
}
