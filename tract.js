document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('openbt').addEventListener('click', function () {
        document.querySelector('.popup').style.display = 'block';
    });
  
    document.getElementById('closePopupButton').addEventListener('click', function () {
        document.querySelector('#popup').style.display = 'none';
    });
  });
  
  function submitForm(event) {
    event.preventDefault();
    // Add validation logic for form fields (Name, Email, Mobile No, City, Country) here.
  
    alert('Form submitted successfully!');
    document.querySelector('.popup').style.display = 'none';
  
  }