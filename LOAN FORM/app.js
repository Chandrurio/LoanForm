document.addEventListener('DOMContentLoaded', function () {
    // Welcome message
    alert('Welcome to the Loan Application Form!');
  
    // Form submission event listener
    const loanForm = document.getElementById('loanForm');
    loanForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Perform form validation (you can add more validation logic)
      const isValid = validateForm();
  
      if (isValid) {
        // If the form is valid, show a success message (you can replace this with your backend submission logic)
        showModal('Loan Application Submitted Successfully!');
        // Reset the form
        loanForm.reset();
      }
    });
  
    // KYC Verification Button event listener
    const kycVerifyBtn = document.getElementById('kycVerifyBtn');
    kycVerifyBtn.addEventListener('click', function () {
      // Add KYC verification logic here
      alert('KYC Verification in progress...');
    });
  
    // Function to validate the form (you can add more validation logic)
    function validateForm() {
      // Example: Check if loan amount is greater than 0
      const loanAmount = document.getElementById('loanAmount').value;
      if (parseFloat(loanAmount) <= 0) {
        alert('Please enter a valid loan amount.');
        return false;
      }
  
      // Add more validation logic as needed
  
      return true;
    }
  
    // Function to show a modal with a message
    function showModal(message) {
      const modalContainer = document.createElement('div');
      modalContainer.classList.add('modal-container');
  
      const modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');
  
      const closeBtn = document.createElement('span');
      closeBtn.classList.add('close-modal');
      closeBtn.innerHTML = '&times;';
      closeBtn.addEventListener('click', function () {
        document.body.removeChild(modalContainer);
      });
  
      modalContent.appendChild(closeBtn);
  
      const messageElement = document.createElement('p');
      messageElement.textContent = message;
      modalContent.appendChild(messageElement);
  
      modalContainer.appendChild(modalContent);
  
      document.body.appendChild(modalContainer);
    }
  });
  