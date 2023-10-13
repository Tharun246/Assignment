document.addEventListener("DOMContentLoaded", function() {
    const surveyForm = document.getElementById("surveyForm");
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");
    const submittedData = document.getElementById("submittedData");
  
    function resetForm() {
      surveyForm.reset();
    }
  
    surveyForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const formData = new FormData(surveyForm);
  
      let dataHtml = "<h2>Submitted Data:</h2><ul>";
      for (const field of surveyForm.elements) {
        if (field.type !== "submit") {
          const label = field.getAttribute("data-label");
          if (label) {
            dataHtml += `<li><strong>${label}:</strong> ${field.value}</li>`;
          }
        }
      }
      dataHtml += "</ul";
  
      submittedData.innerHTML = dataHtml;
  
      modal.style.display = "block";
    });
  
    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
      resetForm(); 
    });
  
    window.addEventListener("click", function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
        resetForm(); 
      }
    });
  });
  